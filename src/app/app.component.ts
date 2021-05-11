import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public cadastro: FormGroup;
  emailRec: string = "";
  senhaRec: string = "";

  constructor(private fb: FormBuilder) {
    this.cadastro = this.fb.group({ email: [""], senha: [""] });
  }

  ngOnInit() {
    this.criarForm();
  }
  criarForm() {
    this.cadastro = this.fb.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ])
      ],
      senha: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }
  get email() {
    return this.cadastro.get("email");
    this.ngOnInit();
  }
  get senha() {
    return this.cadastro.get("senha");
  }
}
