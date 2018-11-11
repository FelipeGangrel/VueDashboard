<template lang="pug">
  #PageForms
    v-page-content
      b-container()
        b-card(title="Formulário")
          b-form(@submit="handleSubmit" @reset="handleReset")
            b-form-row
              b-col
                b-form-group(id="groupNome" label="Nome:" label-for="pessoaNome"
                  description=""
                )
                  b-form-input(id="pessoaNome" type="text" v-model="pessoa.nome" required
                    placeholder="Seu some completo"
                  )
            b-form-row
              b-col(sm)
                b-form-group(id="groupEmail" label="E-mail:" label-for="pessoaEmail")
                  b-form-input(id="pessoaEmail" type="email" v-model="pessoa.email" required placeholder="Seu e-mail")
              b-col(sm)
                b-form-group(id="groupNascimento" label="Nascimento:" label-for="pessoaNascimento")
                  b-form-input(id="pessoaNascimento" type="date" v-model="pessoa.nascimento" required placeholder="Seu e-mail")
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
      pessoa: {},
    }
  },
  created() {
    this.setPageTitle('Forms');
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

