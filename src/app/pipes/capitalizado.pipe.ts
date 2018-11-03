import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalizado"
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: String, todas: boolean = true): String {
    // nombres en minusculas
    value = value.toLowerCase();
    // separo cada nombre por espacio
    let nombres = value.split(" ");
    if (todas) {
      // le pongo la primera letra en mayuscula a cada nombre
      for (let i in nombres) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    }
    else{ 
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    // Junto todos los nombres con un espacio
    return nombres.join(" ");
  }
}
