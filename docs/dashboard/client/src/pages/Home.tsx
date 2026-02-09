import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { AlertCircle, CheckCircle, Clock, Bug, Download, Filter } from "lucide-react";
import { useState, useMemo } from "react";

/**
 * QA Portfolio Dashboard - Data-Driven Minimalism
 * Design Philosophy: Clarity through rigorous visual hierarchy, data as protagonist
 * Color Palette: White bg, Deep Green primary (OKLCH: 0.5 0.15 142), Dark Gray text
 * Typography: IBM Plex Sans (strong, geometric, professional)
 */

// Real defect data from Excel
const allDefects = [
  { id: "BUG-001", title: "Espaçamento desigual na lateral dos campos E-mail e Senha", severity: "Low", module: "Sessão 001", priority: "Média" },
  { id: "BUG-001", title: "Login permitido com espaço inicial no e-mail", severity: "High", module: "Sessão 002", priority: "Média" },
  { id: "BUG-002", title: "Mensagens de validação em idioma incorreto", severity: "Medium", module: "Sessão 002", priority: "Baixa" },
  { id: "BUG-003", title: "Falta de limitação de tentativas de senha", severity: "High", module: "Sessão 002", priority: "Alta" },
  { id: "BUG-004", title: "Comportamento confuso ao usar a seta ao lado barra de navegação", severity: "Medium", module: "Sessão 002", priority: "Média" },
  { id: "BUG-005", title: "Persistência de login via URL após fechamento do navegador", severity: "High", module: "Sessão 002", priority: "Alta" },
  { id: "BUG-006", title: "Login com credenciais inválidas retorna 200 em vez de 401", severity: "High", module: "Sessão 004", priority: "Alta" },
  { id: "BUG-007", title: "Filtro de Salário Máximo é Ignorado para Valores Altos", severity: "Medium", module: "Sessão 005", priority: "Alta" },
  { id: "BUG-008", title: "Filtro de Salário Médio é ignorado para Valores Altos", severity: "Medium", module: "Sessão 005", priority: "Alta" },
  { id: "BUG-009", title: "Quebra de layout em resolução 1920px", severity: "Medium", module: "Sessão 006", priority: "Média" },
  { id: "BUG-010", title: "Falta de barra de rolagem horizontal em resolução 1366px", severity: "Medium", module: "Sessão 006", priority: "Média" },
  { id: "BUG-011", title: "Quebra de layout e falta de barra de rolagem em 1024px", severity: "Medium", module: "Sessão 006", priority: "Alta" },
  { id: "BUG-012", title: "HTML mal estruturado: charset não declarado, <title> ausente", severity: "High", module: "Sessão 007", priority: "Média" },
  { id: "BUG-013", title: "Contraste insuficiente na paginação (WCAG 2.1 AA)", severity: "High", module: "Sessão 008", priority: "Alta" },
  { id: "BUG-014", title: "Lentidão na execução de JavaScript no dashboard", severity: "High", module: "Sessão 009", priority: "Alta" },
  { id: "BUG-015", title: "Main-thread sobrecarregada no dashboard", severity: "High", module: "Sessão 009", priority: "Alta" },
  { id: "BUG-016", title: "JavaScript não minificado aumenta tempo de parsing", severity: "Medium", module: "Sessão 009", priority: "Média" },
  { id: "BUG-017", title: "Carregamento de JS legado desnecessário em browsers modernos", severity: "Medium", module: "Sessão 009", priority: "Média" },
];

const defectsBySeverity = [
  { severity: "Low", count: 1, color: "#d1d5db" },
  { severity: "Medium", count: 8, color: "#f97316" },
  { severity: "High", count: 9, color: "#991b1b" }
];

const bugsByModule = [
  { module: "Sessão 001", bugs: 1 },
  { module: "Sessão 002", bugs: 5 },
  { module: "Sessão 004", bugs: 1 },
  { module: "Sessão 005", bugs: 2 },
  { module: "Sessão 006", bugs: 3 },
  { module: "Sessão 007", bugs: 1 },
  { module: "Sessão 008", bugs: 2 },
  { module: "Sessão 009", bugs: 4 },
];

const sessionTimeline = [
  { session: "S1", time: 20 },
  { session: "S2", time: 40 },
  { session: "S4", time: 60 },
  { session: "S5", time: 60 },
  { session: "S6", time: 25 },
  { session: "S7", time: 60 },
  { session: "S8", time: 25 },
  { session: "S9", time: 25 },
];

export default function Home() {
  const [filterSeverity, setFilterSeverity] = useState<string | null>(null);

  const filteredDefects = useMemo(() => {
    if (!filterSeverity) return allDefects;
    return allDefects.filter(d => d.severity === filterSeverity);
  }, [filterSeverity]);

  const handleDownloadExcel = () => {
    const link = document.createElement('a');
    link.href = '/defeitos.xlsx';
    link.download = 'defeitos.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCSV = () => {
    const headers = ['ID', 'Título', 'Severidade', 'Módulo', 'Prioridade'];
    const rows = allDefects.map(d => [d.id, d.title, d.severity, d.module, d.priority]);
    
    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'defeitos.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-white border-b border-border">
        <div className="container py-12">
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-2">
                QA Testes Exploratórios
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Projeto Freelancer - Júlio de Lima
              </p>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Análise completa de testes exploratórios baseados em sessão (SBTM) em um visualizador de vagas do LinkedIn. 
                9 sessões de teste, 18 defeitos identificados, 7+ horas de execução. Autorizado pelo cliente para publicação pública.
              </p>
            </div>
            <div className="text-right">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/Z3aMNga1TPiNmKKeJq5fbB/sandbox/cyAxICoNw3j9nDkruILTLF-img-1_1770398954000_na1fn_aGVyby1xYS1kYXNoYm9hcmQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWjNhTU5nYTFUUGlObUtLZUpxNWZiQi9zYW5kYm94L2N5QXhJQ29OdzNqOW5Ea3J1SUxUTEYtaW1nLTFfMTc3MDM5ODk1NDAwMF9uYTFmbl9hR1Z5YnkxeFlTMWtZWE5vWW05aGNtUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Xv8dDwCPv3QD35IeAUT6FcIygBv0y2oow4AQkoHj2daQSjqDVg5t5CgjTVl-s5X0~Sgh1DbKuU~zyqM7OnCMtZWdJxS7fo-99OpKQ8if214xCouNnt~Yy9GxCXa4xOKK60I9o63XO5BjMzLe6XxuIO35y7CI~416FJMjL9ltz~Chv66x7fZY-2eQf-~ZEH~4CWomKap8TLENTV0Q-0STFnb0co4jB43fndxMCDA4UJ-qoEiEwdrS68VaWAU7J9m2sNcz0h2JENiigd-bmIpXwRnIK8kma0qj5UIfaFgveQ0bKS3YZkv~zN3T-a8eYHMeuVFyJvwQEYnS~nTomloCPQ__"
                alt="Hero Background"
                className="w-64 h-40 object-cover rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="container py-12">
        <div className="grid grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Total de Sessões
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">9</div>
              <p className="text-xs text-muted-foreground mt-1">7+ horas de execução</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Bug className="w-4 h-4" />
                Defeitos Encontrados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">18</div>
              <p className="text-xs text-muted-foreground mt-1">9 críticos</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-destructive" />
                Críticos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">9</div>
              <p className="text-xs text-muted-foreground mt-1">50% do total</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Módulos Testados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">8</div>
              <p className="text-xs text-muted-foreground mt-1">Sessões 001-009</p>
            </CardContent>
          </Card>
        </div>

        {/* Download Section */}
        <Card className="border-0 shadow-sm mb-12 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Baixar Relatórios</h3>
                <p className="text-sm text-muted-foreground">Acesse os dados completos em Excel ou CSV</p>
              </div>
              <div className="flex gap-3">
                <Button 
                  onClick={handleDownloadExcel}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Excel
                </Button>
                <Button 
                  onClick={handleDownloadCSV}
                  variant="outline"
                >
                  <Download className="w-4 h-4 mr-2" />
                  CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {/* Defects by Severity */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Defeitos por Severidade</CardTitle>
              <CardDescription>Distribuição de bugs identificados</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={defectsBySeverity}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ severity, count }) => `${severity}: ${count}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {defectsBySeverity.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Bugs by Module */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Defeitos por Sessão</CardTitle>
              <CardDescription>Distribuição por área testada</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bugsByModule}>
                  <CartesianGrid strokeDasharray="0" stroke="#e5e7eb" />
                  <XAxis dataKey="module" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="bugs" fill="#3d8d3d" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Session Timeline */}
        <Card className="border-0 shadow-sm mb-12">
          <CardHeader>
            <CardTitle className="text-base">Linha do Tempo de Sessões</CardTitle>
            <CardDescription>Duração de cada sessão de teste em minutos</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sessionTimeline}>
                <CartesianGrid strokeDasharray="0" stroke="#e5e7eb" />
                <XAxis dataKey="session" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="time" 
                  stroke="#3d8d3d" 
                  strokeWidth={2}
                  dot={{ fill: "#3d8d3d", r: 4 }}
                  name="Duração (minutos)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Defects Table with Filter */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Registro Completo de Defeitos</CardTitle>
                <CardDescription>{filteredDefects.length} defeitos encontrados</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={filterSeverity === null ? "default" : "outline"}
                  onClick={() => setFilterSeverity(null)}
                >
                  <Filter className="w-4 h-4 mr-1" />
                  Todos
                </Button>
                <Button
                  size="sm"
                  variant={filterSeverity === "High" ? "default" : "outline"}
                  className={filterSeverity === "High" ? "bg-destructive hover:bg-destructive/90" : ""}
                  onClick={() => setFilterSeverity("High")}
                >
                  Críticos
                </Button>
                <Button
                  size="sm"
                  variant={filterSeverity === "Medium" ? "default" : "outline"}
                  onClick={() => setFilterSeverity("Medium")}
                >
                  Médios
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Título</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Severidade</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Sessão</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Prioridade</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDefects.map((defect, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3 px-4 font-mono text-xs text-primary">{defect.id}</td>
                      <td className="py-3 px-4 text-foreground text-xs">{defect.title}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          defect.severity === "High" ? "bg-destructive/10 text-destructive" :
                          defect.severity === "Medium" ? "bg-orange-100 text-orange-800" :
                          "bg-gray-100 text-gray-800"
                        }`}>
                          {defect.severity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">{defect.module}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">{defect.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Projeto Freelancer • Testadora: <strong>Simone Monteiro Gabionetta</strong> • Mentor: <strong>Júlio de Lima</strong>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Metodologia: Session-Based Test Management (SBTM) • Período: 14-15 de Novembro • Autorizado para publicação pública
          </p>
        </div>
      </div>
    </div>
  );
}
