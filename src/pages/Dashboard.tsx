import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Logo } from "@/components/wt/Logo";
import { Button } from "@/components/ui/button";
import { Building2, ClipboardList, FileText, Bell, LogOut, Plus, TrendingUp } from "lucide-react";
import { toast } from "sonner";

type Home = { id: string; name: string; state: string; status: string; beds: number | null };
type Task = { id: string; title: string; status: string; due_date: string | null; state: string | null };

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<{ full_name: string | null; company: string | null } | null>(null);
  const [homes, setHomes] = useState<Home[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const [{ data: p }, { data: h }, { data: t }] = await Promise.all([
        supabase.from("profiles").select("full_name, company").eq("id", user.id).maybeSingle(),
        supabase.from("homes").select("id,name,state,status,beds").order("created_at", { ascending: false }),
        supabase.from("compliance_tasks").select("id,title,status,due_date,state").order("due_date", { ascending: true }).limit(10),
      ]);
      setProfile(p);
      setHomes(h ?? []);
      setTasks(t ?? []);
      setLoading(false);
    })();
  }, [user]);

  const addHome = async () => {
    const name = prompt("Residence name?");
    if (!name) return;
    const state = prompt("State?") ?? "TX";
    const { error, data } = await supabase
      .from("homes")
      .insert({ owner_id: user!.id, name, state, status: "planning" })
      .select()
      .single();
    if (error) return toast.error(error.message);
    setHomes((prev) => [data as Home, ...prev]);
    toast.success("Residence added");
  };

  const completion = tasks.length === 0 ? 0 : Math.round((tasks.filter((t) => t.status === "done").length / tasks.length) * 100);

  return (
    <main className="min-h-screen bg-muted/30">
      <header className="bg-background border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Link to="/"><Logo /></Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline">{profile?.full_name || user?.email}</span>
            <Button variant="ghost" size="sm" onClick={() => signOut()}><LogOut className="h-4 w-4" /> Sign out</Button>
          </div>
        </div>
      </header>

      <section className="container py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-deep mb-2">Compliance workspace</div>
            <h1 className="font-display text-4xl font-light">Welcome{profile?.full_name ? `, ${profile.full_name.split(" ")[0]}` : ""}.</h1>
            <p className="text-muted-foreground mt-1">{profile?.company || "Your sober living portfolio at a glance."}</p>
          </div>
          <Button onClick={addHome} className="rounded-full bg-gradient-gold" style={{ color: "hsl(var(--primary))" }}>
            <Plus className="h-4 w-4" /> Add residence
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Stat icon={<Building2 className="h-4 w-4" />} label="Residences" value={String(homes.length)} />
          <Stat icon={<ClipboardList className="h-4 w-4" />} label="Open tasks" value={String(tasks.filter((t) => t.status !== "done").length)} />
          <Stat icon={<TrendingUp className="h-4 w-4" />} label="Compliance" value={`${completion}%`} />
          <Stat icon={<Bell className="h-4 w-4" />} label="Alerts" value="0" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-card border border-border rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl">Your residences</h2>
              <span className="text-xs text-muted-foreground">{homes.length} total</span>
            </div>
            {loading ? <Skel /> : homes.length === 0 ? (
              <Empty title="No residences yet" desc="Add your first home to begin tracking licensure and compliance." />
            ) : (
              <div className="divide-y divide-border">
                {homes.map((h) => (
                  <div key={h.id} className="py-4 flex items-center justify-between">
                    <div>
                      <div className="font-medium">{h.name}</div>
                      <div className="text-xs text-muted-foreground">{h.state} · {h.beds ?? 0} beds</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-muted capitalize">{h.status}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-card border border-border rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl">Upcoming tasks</h2>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </div>
            {loading ? <Skel /> : tasks.length === 0 ? (
              <Empty title="No tasks yet" desc="Tasks generate when you select a state and home." />
            ) : (
              <ul className="space-y-3">
                {tasks.map((t) => (
                  <li key={t.id} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
                    <div className="flex-1">
                      <div>{t.title}</div>
                      <div className="text-xs text-muted-foreground">{t.state || "—"}{t.due_date ? ` · due ${t.due_date}` : ""}</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

const Stat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-card border border-border rounded-2xl p-5">
    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">{icon}{label}</div>
    <div className="font-display text-3xl mt-2">{value}</div>
  </div>
);

const Empty = ({ title, desc }: { title: string; desc: string }) => (
  <div className="text-center py-10">
    <div className="font-medium">{title}</div>
    <div className="text-sm text-muted-foreground mt-1">{desc}</div>
  </div>
);

const Skel = () => <div className="space-y-3">{[0, 1, 2].map((i) => <div key={i} className="h-10 rounded-lg bg-muted animate-pulse" />)}</div>;

export default Dashboard;
