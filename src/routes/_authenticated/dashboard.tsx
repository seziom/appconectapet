import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  Bell,
  Calendar,
  DollarSign,
  Home,
  LogOut,
  MessageCircle,
  PawPrint,
  Search,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
});

const revenueData = [
  { mes: "Jan", valor: 12400 },
  { mes: "Fev", valor: 14800 },
  { mes: "Mar", valor: 13200 },
  { mes: "Abr", valor: 17600 },
  { mes: "Mai", valor: 19200 },
  { mes: "Jun", valor: 22800 },
];

const servicesData = [
  { servico: "Banho", total: 142 },
  { servico: "Tosa", total: 98 },
  { servico: "Consulta", total: 64 },
  { servico: "Vacina", total: 41 },
  { servico: "Hotel", total: 22 },
];

const appointments = [
  { hora: "09:00", pet: "Thor", tutor: "Marina Silva", servico: "Banho e tosa", status: "Confirmado" },
  { hora: "10:30", pet: "Luna", tutor: "Carlos Mendes", servico: "Consulta", status: "Em andamento" },
  { hora: "11:00", pet: "Mel", tutor: "Juliana Costa", servico: "Vacina V10", status: "Confirmado" },
  { hora: "14:00", pet: "Bob", tutor: "Rafael Lima", servico: "Banho", status: "Aguardando" },
  { hora: "15:30", pet: "Nina", tutor: "Patricia Souza", servico: "Tosa higiênica", status: "Confirmado" },
];

function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const initials = (user?.email ?? "?").slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-card border-r border-border">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Logo size="sm" />
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: Home, label: "Dashboard", active: true },
            { icon: Users, label: "Clientes" },
            { icon: PawPrint, label: "Pets" },
            { icon: Calendar, label: "Agenda" },
            { icon: DollarSign, label: "Financeiro" },
            { icon: MessageCircle, label: "WhatsApp" },
            { icon: TrendingUp, label: "Relatórios" },
            { icon: Settings, label: "Configurações" },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "text-white shadow-[var(--shadow-brand)]"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              style={item.active ? { background: "var(--gradient-brand)" } : undefined}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <button
            onClick={async () => {
              await signOut();
              navigate({ to: "/" });
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" /> Sair
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 sm:px-6 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar cliente, pet ou agendamento..." className="pl-9" />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarFallback style={{ background: "var(--gradient-brand)" }} className="text-white text-xs font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="flex-1 p-4 sm:p-6 space-y-6 overflow-auto">
          {/* Greeting */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Olá, bem-vindo de volta! 🐾</h1>
              <p className="text-muted-foreground text-sm mt-1">Aqui está o resumo do seu pet shop hoje.</p>
            </div>
            <Button className="text-white border-0 shadow-[var(--shadow-brand)]" style={{ background: "var(--gradient-brand)" }}>
              <Calendar className="mr-2 h-4 w-4" /> Novo agendamento
            </Button>
          </div>

          {/* Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Clientes ativos", value: "284", trend: "+12%", icon: Users },
              { label: "Pets cadastrados", value: "412", trend: "+8%", icon: PawPrint },
              { label: "Agendamentos hoje", value: "23", trend: "+4%", icon: Calendar },
              { label: "Faturamento mês", value: "R$ 22.8k", trend: "+18%", icon: DollarSign },
            ].map((m) => (
              <div key={m.label} className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-[var(--shadow-card)] transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
                    <m.icon className="h-5 w-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs" style={{ color: "var(--turquoise)" }}>
                    {m.trend}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
                <p className="text-2xl font-bold tracking-tight">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Faturamento</h3>
                  <p className="text-xs text-muted-foreground">Últimos 6 meses</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.72 0.13 200)" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="oklch(0.72 0.13 200)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} />
                  <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.75rem",
                    }}
                  />
                  <Area type="monotone" dataKey="valor" stroke="oklch(0.72 0.13 200)" strokeWidth={2.5} fill="url(#rev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-semibold mb-1">Serviços do mês</h3>
              <p className="text-xs text-muted-foreground mb-4">Mais realizados</p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={servicesData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} horizontal={false} />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis dataKey="servico" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={70} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.75rem",
                    }}
                  />
                  <Bar dataKey="total" fill="oklch(0.36 0.07 220)" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Today's appointments */}
          <div className="bg-card border border-border rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Agendamentos de hoje</h3>
                <p className="text-xs text-muted-foreground">{appointments.length} atendimentos previstos</p>
              </div>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">Ver agenda</Button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs text-muted-foreground border-b border-border">
                    <th className="font-medium py-2.5 pr-4">Hora</th>
                    <th className="font-medium py-2.5 pr-4">Pet</th>
                    <th className="font-medium py-2.5 pr-4">Tutor</th>
                    <th className="font-medium py-2.5 pr-4">Serviço</th>
                    <th className="font-medium py-2.5">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((a) => (
                    <tr key={a.hora} className="border-b border-border last:border-0 hover:bg-muted/40 transition-colors">
                      <td className="py-3 pr-4 font-medium">{a.hora}</td>
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-brand)" }}>
                            <PawPrint className="h-3.5 w-3.5 text-white" />
                          </div>
                          {a.pet}
                        </div>
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">{a.tutor}</td>
                      <td className="py-3 pr-4">{a.servico}</td>
                      <td className="py-3">
                        <Badge
                          variant={a.status === "Em andamento" ? "default" : "secondary"}
                          className={a.status === "Em andamento" ? "text-white border-0" : ""}
                          style={a.status === "Em andamento" ? { background: "var(--gradient-brand)" } : undefined}
                        >
                          {a.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}