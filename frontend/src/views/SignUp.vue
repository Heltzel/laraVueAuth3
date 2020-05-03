<template>
  <div>
    <v-card class="mx-auto mt-5" max-width="500">
      <v-toolbar color="primary" dark>
        <v-toolbar-title>SignUp</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-container fluid>
        <v-row dense>
          <v-col>
            <v-card>
              <v-card-text>
                <v-form ref="signUpForm">
                  <v-text-field
                    v-model="form.name"
                    :rules="inputRules"
                    :counter="30"
                    label="Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    :counter="40"
                    label="Email"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="form.password"
                    :rules="inputRules"
                    :counter="30"
                    label="Password"
                    required
                  ></v-text-field>
                  <v-card-actions>
                    <v-btn small color="primary" @click.prevent="submit"
                      >SignUp</v-btn
                    >
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      inputRules: [
        (value) => !!value || "Required.",
        (v) => v.length <= 30 || "Must be less than 30 characters",
      ],
      emailRules: [
        (value) => !!value || "E-mail is required",
        (v) => v.length <= 40 || "Must be less than 40 characters",
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      signUp: "auth/signUp",
    }),
    submit() {
      if (this.$refs.signUpForm.validate()) {
        this.signUp(this.form).then(() => {
          this.$router
            .replace({
              name: "Dashboard",
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    },
  },
};
</script>

<style scoped></style>
