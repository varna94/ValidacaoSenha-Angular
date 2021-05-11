import { Component, OnInit } from "@angular/core";
import { isNumber } from "util";
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

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

    this.ngOnInit();
  }
}
