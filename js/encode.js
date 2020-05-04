let vue = new Vue({
  el: "#app",
  data: {
    navbar: false,
    encoder: '',
    alpha: ['Ա', 'Բ', 'Գ', 'Դ', 'Ե', 'Զ', 'Է', 'Ը', 'Թ', 'Ժ', 'Ի', 'Լ', 'Խ', 'Ծ', 'Կ', 'Հ', 'Ձ', 'Ղ', 'Ճ', 'Մ', 'Յ', 'Ն', 'Շ', 'Ո', 'Չ', 'Պ', 'Ջ', 'Ռ', 'Ս', 'Վ', 'Տ', 'Ր', 'Ց', 'Ւ', 'Փ', 'Ք', 'և', 'Օ', 'Ֆ'],
    crypt: ['Ա', 'Բ', 'Գ', 'Դ', 'Ե', 'Զ', 'Է', 'Ը', 'Թ', 'Ժ', 'Ի', 'Լ', 'Խ', 'Ծ', 'Կ', 'Հ', 'Ձ', 'Ղ', 'Ճ', 'Մ', 'Յ', 'Ն', 'Շ', 'Ո', 'Չ', 'Պ', 'Ջ', 'Ռ', 'Ս', 'Վ', 'Տ', 'Ր', 'Ց', 'Ւ', 'Փ', 'Ք', 'և', 'Օ', 'Ֆ'],
    step: '',
    word: '',
    temp: '',
    result: '',
  },
  methods: {
    encode: function(){
      if (this.encoder != '' && this.step > 0 && this.step < 26){
        this.result = ''
        this.crypt = ['Ա', 'Բ', 'Գ', 'Դ', 'Ե', 'Զ', 'Է', 'Ը', 'Թ', 'Ժ', 'Ի', 'Լ', 'Խ', 'Ծ', 'Կ', 'Հ', 'Ձ', 'Ղ', 'Ճ', 'Մ', 'Յ', 'Ն', 'Շ', 'Ո', 'Չ', 'Պ', 'Ջ', 'Ռ', 'Ս', 'Վ', 'Տ', 'Ր', 'Ց', 'Ւ', 'Փ', 'Ք', 'և', 'Օ', 'Ֆ'];
        this.temp = this.crypt.slice(0, this.step);

        for (let i = 0; i < this.step; i++){
          this.crypt.shift();
        }

        this.temp.forEach(elem => this.crypt.push(elem))

        if (typeof(this.word) == 'string'){
          this.word = this.encoder.toUpperCase().split("");
        }

        for (let i = 0; i < this.word.length; i++){
          this.result += this.crypt[this.alpha.indexOf(this.word[i])];
        }

        Swal.fire({
          title: 'Կոդավորվեց',
          text: `Մուտքագրված ${this.encoder} բառը կոդավորվեց որպես - ${this.result}`,
          icon: 'success'
        })
      }
      else{
        Swal.fire({
          title: 'Error',
          text: 'Ճիշտ լրացեք դաշտերը',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  }
})