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
  validaEmail(emailValue: any) {
    let email = emailValue.target.value;
    console.log(email);
    this.cadastro = this.fb.group({
      email: [
        email,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ])
      ]
    });
    console.log("email");
    console.log(this.cadastro.get("email")?.valid);
    console.log(this.cadastro.get("email")?.value);
    // this.ngOnInit();
  }
  validaSenha(senhaValue: any) {
    let senha = senhaValue.target.value;
    console.log(senha);
    this.cadastro = this.fb.group({
      senha: [
        senha,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"
          )
        ])
      ]
    });
    console.log("senha");
    console.log(this.cadastro.get("senha")?.valid);
    console.log(this.cadastro.get("senha")?.value);
    // this.ngOnInit();
  }
  get email() {
    return this.cadastro.get("email");
  }
  get senha() {
    return this.cadastro.get("senha");
  }
}
