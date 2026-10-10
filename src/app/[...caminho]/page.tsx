import { redirect } from "next/navigation";

// O site tem uma página só: qualquer endereço que não existe volta para a inicial
export default function PaginaInexistente() {
  redirect("/");
}
