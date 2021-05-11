import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "filtroDigitacao";
  public cadastro: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastro = this.fb.group({ email: [""], senha: [""] });
  }

  ngOnInit() {}
  validaCadastro(numero: number) {
    console.log(numero);
    this.cadastro = this.fb.group({
      email: [
        numero,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ])
      ],
      senha: [
        numero,
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });

    console.log(this.cadastro.get("email")?.valid);
    console.log(this.cadastro.get("email")?.value);
    this.ngOnInit();
  }
}
