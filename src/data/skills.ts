import { Cloud, Github as Git, Terminal, Server, Database, Shield } from 'lucide-react';

export const skillsData = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "Digital Ocean", "GCP", "CIVO"]
  },
  {
    title: "CI/CD",
    icon: Git,
    items: ["Jenkins", "GitLab CI", "GitHub Actions"]
  },
  {
    title: "Scripting",
    icon: Terminal,
    items: ["Python", "Bash"]
  },
  {
    title: "Infrastructure as Code",
    icon: Server,
    items: ["Terraform", "CloudFormation", "Ansible"]
  },
  {
    title: "Containers & Orchestration",
    icon: Database,
    items: ["Docker", "Portainer"]
  },
  {
    title: "Security & Monitoring",
    icon: Shield,
    items: ["Vault", "Prometheus", "Grafana", "CloudFlare"]
  }
];