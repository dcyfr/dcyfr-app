export type TemplateFramework = 'Web' | 'API' | 'Chatbot' | 'CLI' | 'Notebooks';
export type TemplateMaturity = 'stable' | 'experimental' | 'beta';
export type TemplateStack = 'React' | 'TypeScript' | 'GraphQL' | 'Node.js' | 'Python' | 'RAG' | 'AI';

export interface TemplateFeature {
  typescript: boolean;
  testing: boolean;
  designSystem: boolean;
  dcyfrAi: boolean;
  auth: boolean;
  database: boolean;
  docker: boolean;
}

export interface Template {
  id: string;
  name: string;
  packageName: string;
  version: string;
  description: string;
  framework: TemplateFramework;
  stack: TemplateStack[];
  maturity: TemplateMaturity;
  features: TemplateFeature;
  githubRepo: string;
  vercelDeployUrl?: string;
  docsUrl?: string;
  thumbnail?: string;
  primaryLanguage: string;
  updatedAt: string;
}

export interface IntegrationMatrixRow {
  templateId: string;
  features: TemplateFeature;
}
