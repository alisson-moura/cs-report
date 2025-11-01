"use client";

import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APIProvider } from "@vis.gl/react-google-maps";
import { AutocompleteWebComponent } from "./input-search";
import {
  X,
  MapPin,
  ExternalLink,
  ChevronRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const areas = [
  { label: "Alimentação", value: "alimentacao" },
  { label: "Restaurante", value: "restaurante" },
  { label: "Bares e Cafés", value: "bares_cafes" },
  { label: "Supermercado", value: "supermercado" },
  { label: "Farmácia", value: "farmacia" },
  { label: "Saúde e Bem-estar", value: "saude_bem_estar" },
  { label: "Beleza e Estética", value: "beleza_estetica" },
  { label: "Moda e Vestuário", value: "moda_vestuario" },
  { label: "Varejo (Geral)", value: "varejo_geral" },
  { label: "Serviços de Limpeza", value: "limpeza" },
  { label: "Hotelaria e Turismo", value: "hotelaria_turismo" },
  { label: "Serviços Automotivos", value: "servicos_automotivos" },
  { label: "Tecnologia", value: "tecnologia" },
  { label: "Educação", value: "educacao" },
  { label: "Outro", value: "outro" },
] as const;

const formSchema = z.object({
  name: z.string().min(2, "O nome é obrigatório"),
  email: z.email("Email inválido"),
  establishment: z.object(
    {
      id: z.string(),
      name: z.string(),
      address: z.string(),
      googleMapsURI: z.url(),
    },
    { error: "O estabelecimento é obrigatório" }
  ),
  area: z.string().min(2, "A área de atuação é obrigatória"),
});

export function SolicitationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      area: "",
      establishment: undefined,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));


      console.log("Form submitted:", data);

      form.reset();

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  const clearEstablishment = () => {
    form.resetField("establishment");
  };

  const selectedEstablishment = useWatch({
    control: form.control,
    name: "establishment",
  }) as z.infer<typeof formSchema>["establishment"];

  const isSubmitting = form.formState.isSubmitting;

  if (form.formState.isSubmitSuccessful) {
    return (
      <section id="solicitar" className="w-full bg-muted w-full py-20 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="max-w-2xl mx-auto mb-6 border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">
              Solicitação enviada com sucesso!
            </AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Estamos processando suas avaliações. Assim que seu painel de BI
              estiver pronto, enviaremos um e-mail com o link de acesso.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""}
      libraries={["places"]}
    >
      <section id="solicitar" className="w-full bg-muted w-full py-20 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">
                Solicite sua Análise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                id="form-solicitation"
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <FieldGroup>
                  <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-solicitation-name">
                          Nome Completo
                        </FieldLabel>
                        <Input
                          {...field}
                          id="form-solicitation-name"
                          aria-invalid={fieldState.invalid}
                          placeholder=""
                          autoComplete="off"
                          disabled={isSubmitting}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-solicitation-email">
                          E-mail
                        </FieldLabel>
                        <Input
                          {...field}
                          id="form-solicitation-email"
                          aria-invalid={fieldState.invalid}
                          placeholder=""
                          autoComplete="off"
                          disabled={isSubmitting}
                        />
                        <FieldDescription>
                          Este endereço de e-mail será utilizado para enviar o
                          seu acesso ao seu painel de satisfação do cliente.
                        </FieldDescription>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name="area"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        orientation="vertical"
                        data-invalid={fieldState.invalid}
                      >
                        <FieldContent>
                          <FieldLabel htmlFor="form-solicitation-area">
                            Área de Atuação
                          </FieldLabel>
                          <FieldDescription>
                            Informe em qual área o seu negócio atua.
                          </FieldDescription>
                        </FieldContent>
                        <Select
                          name={field.name}
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger
                            id="form-solicitation-area"
                            aria-invalid={fieldState.invalid}
                            className="min-w-[120px]"
                          >
                            <SelectValue placeholder="Escolha uma área" />
                          </SelectTrigger>
                          <SelectContent position="item-aligned">
                            <SelectSeparator />
                            {areas.map((area) => (
                              <SelectItem key={area.value} value={area.value}>
                                {area.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    name="establishment"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-solicitation-establishment">
                          Selecione o seu estabelecimento
                        </FieldLabel>

                        {!selectedEstablishment ? (
                          <>
                            <AutocompleteWebComponent
                              onPlaceSelect={(
                                place: google.maps.places.Place | null
                              ): void => {
                                if (!place || !place.id) {
                                  field.onChange(undefined);
                                  return;
                                }
                                const establishmentData = {
                                  id: place.id,
                                  name: place.displayName || "",
                                  address: place.formattedAddress || "",
                                  googleMapsURI: place.googleMapsURI || "",
                                };
                                field.onChange(establishmentData);
                              }}
                            />
                            <FieldDescription>
                              Procure o seu estabelecimento no Google para
                              podermos analisar suas avaliações.
                            </FieldDescription>
                          </>
                        ) : (
                          <Card className="relative">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-2 h-6 w-6"
                              onClick={clearEstablishment}
                              aria-label="Remover estabelecimento"
                              disabled={isSubmitting}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                            <CardContent className="pt-6 pb-4">
                              <div className="space-y-2">
                                <h3 className="font-semibold text-lg pr-8">
                                  {selectedEstablishment.name}
                                </h3>
                                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                  <span>{selectedEstablishment.address}</span>
                                </div>
                                {selectedEstablishment.googleMapsURI && (
                                  <a
                                    href={selectedEstablishment.googleMapsURI}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                                  >
                                    Ver no Google Maps
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        )}

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </FieldGroup>
              </form>
            </CardContent>
            <CardFooter>
              <Field orientation="horizontal">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset()}
                  disabled={isSubmitting}
                >
                  Limpar
                </Button>
                <Button
                  type="submit"
                  form="form-solicitation"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Análise
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </Field>
            </CardFooter>
          </Card>
        </div>
      </section>
    </APIProvider>
  );
}
