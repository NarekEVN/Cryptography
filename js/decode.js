let vue = new Vue({
  el: "#app",
  data: {
    navbar: false,
    decoder: '',
    alpha: ['Ա', 'Բ', 'Գ', 'Դ', 'Ե', 'Զ', 'Է', 'Ը', 'Թ', 'Ժ', 'Ի', 'Լ', 'Խ', 'Ծ', 'Կ', 'Հ', 'Ձ', 'Ղ', 'Ճ', 'Մ', 'Յ', 'Ն', 'Շ', 'Ո', 'Չ', 'Պ', 'Ջ', 'Ռ', 'Ս', 'Վ', 'Տ', 'Ր', 'Ց', 'Ւ', 'Փ', 'Ք', 'և', 'Օ', 'Ֆ'],
    crypt: ['Ա', 'Բ', 'Գ', 'Դ', 'Ե', 'Զ', 'Է', 'Ը', 'Թ', 'Ժ', 'Ի', 'Լ', 'Խ', 'Ծ', 'Կ', 'Հ', 'Ձ', 'Ղ', 'Ճ', 'Մ', 'Յ', 'Ն', 'Շ', 'Ո', 'Չ', 'Պ', 'Ջ', 'Ռ', 'Ս', 'Վ', 'Տ', 'Ր', 'Ց', 'Ւ', 'Փ', 'Ք', 'և', 'Օ', 'Ֆ'],
    step: 1,
    temp: '',
    word: '',
    result: '',
  },
  methods: {
    decode: function(){
      if (this.decoder != ''){
        if (this.step > 25){
          Swal.fire({
            title: 'Վերջ',
            text: 'Կատարված 25 քայլերը չվերծանեցին բառը',
            icon: 'error'
          })
          return;
        }
        this.result = ''
        this.crypt = ['Ա', 'Բ', 'Գ', 'Դ', 'Ե', 'Զ', 'Է', 'Ը', 'Թ', 'Ժ', 'Ի', 'Լ', 'Խ', 'Ծ', 'Կ', 'Հ', 'Ձ', 'Ղ', 'Ճ', 'Մ', 'Յ', 'Ն', 'Շ', 'Ո', 'Չ', 'Պ', 'Ջ', 'Ռ', 'Ս', 'Վ', 'Տ', 'Ր', 'Ց', 'Ւ', 'Փ', 'Ք', 'և', 'Օ', 'Ֆ'];
        this.temp = this.crypt.slice(0, this.step);

        for (let i = 0; i < this.step; i++){
          this.crypt.shift();
        }

        this.temp.forEach(elem => this.crypt.push(elem))

        if (typeof(this.word) == 'string'){
          this.word = this.decoder.toUpperCase().split("");
        }

        for (let i = 0; i < this.word.length; i++){
          this.result += this.alpha[this.crypt.indexOf(this.word[i])];
        }

        Swal.fire({
          title: 'Արդյոք բառը ճիշտ է?',
          text: `Վերծանված բառն է ${this.result}, քայլը = ${this.step}: Բառը ճիշտ է?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Այո',
          cancelButtonText: 'Ոչ, շարունակել'
        }).then(response => {
          
          if (response.value){
            Swal.fire({
              title: 'Հաջողվեց',
              text: `Բառը վերծանվեց - ${this.result}, քայլը - ${this.step}`,
              icon: 'success',
            })
            this.step = 1;
          }
          else{
            this.step++;
            this.decode();
          }
        })
        
      }
      else{
        Swal.fire({
          title: 'Error',
          text: 'Լրացրեք վերծանվող բառի դաշտը',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  }
})