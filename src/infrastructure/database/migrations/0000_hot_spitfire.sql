CREATE TABLE "clientes_pf" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"cpf" text NOT NULL,
	"nome" text NOT NULL,
	"email" text NOT NULL,
	"telefone" text NOT NULL,
	"usuario_responsavel_id" uuid NOT NULL,
	"data_criacao" timestamp DEFAULT now() NOT NULL,
	"data_atualizacao" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "clientes_pf_cpf_unique" UNIQUE("cpf")
);
--> statement-breakpoint
CREATE TABLE "clientes_pj" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"cnpj" text NOT NULL,
	"razao_social" text NOT NULL,
	"nome_fantasia" text NOT NULL,
	"email" text NOT NULL,
	"telefone" text NOT NULL,
	"segmento" text,
	"usuario_responsavel_id" uuid NOT NULL,
	"data_criacao" timestamp DEFAULT now() NOT NULL,
	"data_atualizacao" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "clientes_pj_cnpj_unique" UNIQUE("cnpj")
);
--> statement-breakpoint
CREATE TABLE "negociacoes_pf" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"titulo" text NOT NULL,
	"valor" real NOT NULL,
	"descricao" text,
	"fase" text NOT NULL,
	"data_previsao_fechamento" timestamp,
	"motivo_perda" text,
	"usuario_responsavel_id" uuid NOT NULL,
	"cliente_id" uuid NOT NULL,
	"data_criacao" timestamp DEFAULT now() NOT NULL,
	"data_atualizacao" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "negociacoes_pj" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"titulo" text NOT NULL,
	"valor" real NOT NULL,
	"descricao" text,
	"fase" text NOT NULL,
	"data_previsao_fechamento" timestamp,
	"motivo_perda" text,
	"usuario_responsavel_id" uuid NOT NULL,
	"cliente_id" uuid NOT NULL,
	"data_criacao" timestamp DEFAULT now() NOT NULL,
	"data_atualizacao" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tarefas" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"titulo" text NOT NULL,
	"tipo" text NOT NULL,
	"usuario_responsavel_id" uuid NOT NULL,
	"cliente_id" uuid,
	"negociacao_id" uuid,
	"descricao" text,
	"status" text NOT NULL,
	"data_vencimento" timestamp NOT NULL,
	"data_criacao" timestamp DEFAULT now() NOT NULL,
	"data_atualizacao" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "usuarios" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"cpf" text NOT NULL,
	"nome" text NOT NULL,
	"cargo" text NOT NULL,
	"email" text NOT NULL,
	"senha" text NOT NULL,
	"data_criacao" timestamp DEFAULT now() NOT NULL,
	"data_atualizacao" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "usuarios_cpf_unique" UNIQUE("cpf"),
	CONSTRAINT "usuarios_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "clientes_pf" ADD CONSTRAINT "clientes_pf_usuario_responsavel_id_usuarios_id_fk" FOREIGN KEY ("usuario_responsavel_id") REFERENCES "public"."usuarios"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "clientes_pj" ADD CONSTRAINT "clientes_pj_usuario_responsavel_id_usuarios_id_fk" FOREIGN KEY ("usuario_responsavel_id") REFERENCES "public"."usuarios"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "negociacoes_pf" ADD CONSTRAINT "negociacoes_pf_usuario_responsavel_id_usuarios_id_fk" FOREIGN KEY ("usuario_responsavel_id") REFERENCES "public"."usuarios"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "negociacoes_pf" ADD CONSTRAINT "negociacoes_pf_cliente_id_clientes_pf_id_fk" FOREIGN KEY ("cliente_id") REFERENCES "public"."clientes_pf"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "negociacoes_pj" ADD CONSTRAINT "negociacoes_pj_usuario_responsavel_id_usuarios_id_fk" FOREIGN KEY ("usuario_responsavel_id") REFERENCES "public"."usuarios"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "negociacoes_pj" ADD CONSTRAINT "negociacoes_pj_cliente_id_clientes_pj_id_fk" FOREIGN KEY ("cliente_id") REFERENCES "public"."clientes_pj"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tarefas" ADD CONSTRAINT "tarefas_usuario_responsavel_id_usuarios_id_fk" FOREIGN KEY ("usuario_responsavel_id") REFERENCES "public"."usuarios"("id") ON DELETE no action ON UPDATE no action;