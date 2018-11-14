<template lang="pug">
  #PageForms
    v-page-content
      b-container()
        b-card(title="Formulário")
          b-form(@submit="handleSubmit" @reset="handleReset" novalidate)
            b-form-row
              b-col
                b-form-group(id="groupNome"  label="Nome:" label-for="pessoaNome" description=""
                  :state="stateNome" :invalid-feedback="invalidFeedbackNome" :valid-feedback="validFeedbackNome"
                )
                  b-form-input(id="pessoaNome"  type="text" v-model="pessoa.nome" :state="stateNome" required
                    placeholder="Seu some completo"
                  )
            b-form-row
              b-col(sm)
                b-form-group(id="groupEmail" label="E-mail:" label-for="pessoaEmail"
                  :state="stateEmail" :invalid-feedback="invalidFeedbackEmail" :valid-feedback="validFeedbackEmail"
                )
                  b-form-input(id="pessoaEmail" type="email" v-model="pessoa.email" required placeholder="Seu e-mail"
                    :state="stateEmail" 
                  )
              b-col(sm)
                b-form-group(id="groupNascimento" label="Nascimento:" label-for="pessoaNascimento"
                  :state="stateNascimento" :invalid-feedback="invalidFeedbackNascimento" :valid-feedback="validFeedbackNascimento"
                )
                  b-form-input(id="pessoaNascimento" type="date" v-model="pessoa.nascimento" required placeholder="Seu e-mail" :state="stateNascimento")
              b-col(sm)
                b-form-group(id="groupConsole" label="Console preferido:" label-for="pessoaConsole")
                  b-form-select(id="pessoaConsole" :options="consoles" v-model="pessoa.console")
            b-form-row
              b-col
                b-form-group(label="Tecnologias:")
                  b-form-checkbox-group(:options="tecnologias" v-model="pessoa.tecnologias")

            b-form-row
              b-col
                b-form-group(id="groupBio" label="Mensagem" label-for="pessoaBio")
                  b-form-textarea(id="output" v-model="pessoa.bio" placeholder="Escreva algo" rows="3")

            span {{ pessoa }}

            hr
            b-form-row(align-h="center")
              b-col(col md="4")
                b-button(type="submit" variant="primary shadow" block) Enviar
              b-col(col md="auto")
                b-button(type="reset" variant="secondary shadow" block) Limpar



</template>

<script>
import Page from "../components/Page/Page";


const validador = {
  minLength(length, value) {
    return value.length >= length;
  },
  notEmpty(value) {
    return value.length > 0;
  },
  validEmail(value) {
    const rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rule.test(value);
  },
  dateIsFuture(date) {
    let now = new Date();
    let test = new Date(date);
    return test > now;
  }
};

export default {
  name: "PageForms",
  extends: Page,
  data() {
    return {
      consoles: [
        { value: "ps4", text: "Playstation 4" },
        { value: "xone", text: "Xbox One" },
        { value: "nswitch", text: "Nintendo Switch" },
        { value: "pc", text: "PC" },
      ],
      tecnologias: ['Angular JS','NodeJS','Flutter','VueJS'],
      pessoa: {
        nome: "",
        email: "",
        nascimento: "",
        console: "",
        tecnologias: [],
      },
    }
  },
  created() {
    this.setPageTitle('Forms');

    let now = new Date();
    let date = new Date('2018-12-30');

    console.log(date < now);
  },
  computed: {
    // nome
    stateNome() {
      return validador.minLength(5, this.pessoa.nome);
    },
    invalidFeedbackNome() {
      if (!validador.notEmpty(this.pessoa.nome))
        return "Insira seu nome";
      else if (!validador.minLength(5, this.pessoa.nome))
        return "Seu nome precisa ter no mínimo 5 caracteres";
    },
    validFeedbackNome() {
      if (this.stateNome) return "Seu nome é válido";
    },
    // email
    stateEmail() {
      return validador.validEmail(this.pessoa.email);
    },
    invalidFeedbackEmail() {
      if (!validador.notEmpty(this.pessoa.email))
        return "Insira seu e-mail";
      else if (!validador.validEmail(this.pessoa.email)) {
        return "Insira um e-mail válido";
      }
    },
    validFeedbackEmail () {
      if (this.stateEmail) return "Ótimo. Seu e=mail é válido";
    },
    // nascimento
    stateNascimento() {
      return validador.notEmpty(this.pessoa.nascimento) && !validador.dateIsFuture(this.pessoa.nascimento);
    },
    invalidFeedbackNascimento() {
      if (!validador.notEmpty(this.pessoa.nascimento))
        return "Precisamos de sua data de nascimento";
      if (validador.dateIsFuture(this.pessoa.nascimento))
        return "Você veio do futuro?";
    },
    validFeedbackNascimento() {
      if (this.stateNascimento) return "Obrigado por informar sua data de nascimento";
    }

  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.pessoa));
    },
    handleReset(event) {
      this.pessoa = {};
    }
  }
}
</script>

