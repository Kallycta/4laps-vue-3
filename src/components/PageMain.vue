<template>
  <div  id="mainTemplate">
    <div id="slider-main" class="main__slider">
      <div class="mobile-slider">
        <carousel
            :items-to-show="1"
            :itemsToScroll="1"
            :wrapAround="true"

        >
          <slide v-for="(item, index) in state.banners" v-bind:key="index">
                      <div class="mobile-slider__slide item" >
                        <div class="banner">
                                <img :src="`${item.PREVIEW_PICTURE}`" alt="banner_dog" @click="routerLink(item.PROPERTY_LINK_VALUE, 'notRouter')">
                        </div>
                      </div>
          </slide>
          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>
    </div>

    <h3 class="banner-header">Сообщества</h3>
    <div id="slider-public" >
      <carousel
          :items-to-show="state.communities.length > 5 ? 5 : state.communities.length"
          :itemsToScroll="1"
          :wrapAround="true"
      >
        <slide
            v-for="(item, index) in state.communities"
            v-bind:key="index">
          <div class="mobile-slider__slide item" >
<!--            <div class="banner-public"  @click="routerLink({name: 'secondPage', params: {id: item.ID ? item.ID : '1' }, query: {id:item.ID }})">-->
            <div class="banner-public"  @click="routerLink({name: 'secondPage', params: {id: item.ID ? item.ID : '1' }})">
              <span class="banner-public-text">{{item.NAME}}</span>
              <img :src='`${item.UF_PREVIEW_PICTURE }`' alt="">
            </div>
          </div>
        </slide>

        <template #addons>
          <pagination />
        </template>
      </carousel>

    </div>
    <h3 class="banner-header">Анонсы</h3>
    <div id="slider-announce" >
      <carousel
          :itemsToShow="state.announcements.length > 2 ? 2 : state.announcements.length"
          :itemsToScroll="1"
          :snapAlign="'start'"
          :wrapAround="true"
      >
        <slide
            v-for="(item, index) in state.announcements"
            v-bind:key="index">
          <div class="mobile-slider__slide item"  >
            <div class="banner-announce" @click="routerLink(`${item.LIST_PAGE_URL}`,'not-router')">
              <img  :src="`${item.PREVIEW_PICTURE}`"/>
          </div>
          </div>
        </slide>

        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>

    <div class='bottom-section'>
      <div class='bottom-section__text'>Для обратной связи по работе сообщества пишите на почту отдела обучения</div>
      <div class="bottom-section__email">obuchenie@4lapy.ru</div>
      <div class="bottom-section__png">
        <svg width="285" height="282" viewBox="0 0 285 282" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.2" d="M216.997 218.569C197.895 218.569 181.468 206.341 178.412 183.415C166.568 205.959 147.849 217.423 120.342 217.423C90.5429 217.423 63.8003 196.789 63.8003 149.024C63.8003 104.699 93.2172 60.374 142.118 60.374C163.13 60.374 179.176 71.8374 186.052 89.4146L189.109 66.8699H216.233L205.154 150.171C203.244 163.163 200.952 191.057 219.29 191.057C238.773 191.057 255.583 165.837 255.583 123.423C255.583 59.9919 212.031 26.748 149.377 26.748C78.6997 26.748 30.563 79.0976 30.563 148.642C30.563 208.634 69.5308 253.341 134.477 253.341C161.602 253.341 216.233 243.648 236.982 226.976L247.679 253.341C226.19 272.976 163.13 282 134.477 282C54.2493 282 0 224.683 0 147.496C0 63.4309 64.9464 0 150.141 0C223.874 0 285 38.2114 285 121.894C285 184.179 251.381 218.569 216.997 218.569ZM142.5 89.0325C114.229 89.0325 97.0375 117.691 97.0375 149.406C97.0375 176.154 108.499 189.528 128.747 189.528C158.928 189.528 175.737 160.106 175.737 126.48C175.737 102.789 163.512 89.0325 142.5 89.0325Z" fill="white"/>
      </svg>
      </div>
    </div>

    <div class="bottom-container">
      <button id="show-modal" @click="openModal() " class="bottom-container-btn">
        Стать экспертом*
      </button>
      <Modal ref="modal"
             class="modal-community-expert"
      >
        <template v-slot:header>
          <h3  v-if="!showThanksMessage" >Чтобы стать экспертом, вам нужно ответить на несколько вопросов:</h3>
          <div v-if="showThanksMessage" class="modal-header-tnx-message">
            Спасибо за ответы!
          </div>
        </template>
        <template v-slot:body>
          <div v-if="!showThanksMessage">
            <form @submit.prevent="submitQuestion()" >
              <div>
                <label>Являетесь ли вы специалистом, к которому обращаются за советом и коллеги и покупатели? Если да, то кратко расскажите, как вам удалось заслужить такое доверие?</label>
                <input  required type="text" v-model="formData.question1">
              </div>
              <div>
                <label>Экспертом по содержанию какого вида питомца вы являетесь?</label>
                <input  required type="text" v-model="formData.question2">
              </div>
              <div>
                <label>Являетесь ли вы заводчиком?</label>
                <input  required type="text" v-model="formData.question3">
              </div>
              <div>
                <label>Есть ли у вас питомник? Если есть, то укажите данные питомника или регистрационные данные питомцев?</label>
                <input required type="text" v-model="formData.question4">
              </div>
              <div>
                <label>Сколько лет существует питомник?</label>
                <input  required type="text" v-model="formData.question5">
              </div>
              <div>
                <label>Какие питомцы в питомнике?</label>
                <input  required type="text" v-model="formData.question6">
              </div>
              <div>
                <label>Был ли опыт посещения выставок и есть ли у ваших питомцев оценка от эксперта?</label>
                <input required type="text" v-model="formData.question7">
              </div>
              <div>
                <label>Укажите вашу дополнительную почту для ответа:</label>
                <input required type="email"  v-model="formData.email">
              </div>

              <button class="bottom-container-btn btn-bottom-modal" type="submit">
                Отправить
              </button>
            </form>
          </div>
          <div v-if="showThanksMessage" >
            <div class="modal-text-tnx-message">Мы свяжемся с вами в течение недели.</div>
            <div class="modal-text-tnx-img">
              <img :src="mainTnxPic" alt="Pic-Cat">
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <div v-if="!showThanksMessage">
<!--            <button class="bottom-container-btn btn-bottom-modal" type="submit">-->
<!--              Отправить-->
<!--            </button>-->
            <div class="bottom-container-text">
              *Вы можете указать вашу личную почту, ответ придется на вашу личную почту и почту магазина
            </div>
          </div>
          <div v-if="showThanksMessage">
            <button class="bottom-container-btn btn-bottom-modal" v-on:click="closeTnxModal()">
              Вернуться
            </button>
          </div>
        </template>
      </Modal>
      <div class="bottom-container-text">
        *заявка на подключение к экспертной группе доступна всем сотрудникам компании
      </div>
    </div>
  </div>
</template>
<script>

import { Carousel, Slide, Pagination } from 'vue3-carousel';
import Modal from '../components/Modal.vue'

export default {
  name: 'PageMain',
  components: {
    Modal,
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      mainTnxPic: null,
      banner_example: null,
      announce_example: null,
      formData: {
        action: 'becomeExpert',
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5:'',
        question6:'',
        question7:'',
        email: '',
      },
      state: {
        banners: [],
        communities: [],
        announcements: [],
        paginatedData:[],
        educations:{},
        community: {},
      },
      showModal: false,
      showThanksMessage: false,
    }
  },
  props: {
  },
  created() {
    this.mainTnxPic = require('../assets/mainTnxPic.svg');
    this.banner_example = require('../assets/ban.png')
    this.announce_example = require('../assets/an1.png')
  },
  async mounted() {
    await this.getBanners();
    await this.getCommunities();
    await this.getAnnouncements();

  },
  methods:{
  async getCommunities() {
  try {
    const response = await fetch("/services/community/?action=getCommunities");
    const data = await response.json();
    this.state.communities = data.data

  }catch(e) {
    console.error(e)
  }
},
    async submitQuestion() {
      const formData = new FormData();

      Object.entries(this.formData).forEach(([key, value]) => {
        formData.append(key, value);
      });
      try {
        const response = await fetch('/services/community/',{
          method: 'POST',
          body: formData
        }
        );
        const data = await response.json()
        this.openTnxModal();
        Object.entries(this.formData).forEach(([key, value]) => {
          this.formData[key] = '' ;
        });

      } catch (error) {
        console.error("Error submitting form:", error);
        alert('Ошибка отправки: ' + error.message)
      }
    },
    async getBanners() {
      try {
        const response = await fetch("/services/community/?action=getBanners");
        const data = await response.json();
        this.state.banners = data.data;
      }catch(e) {
        console.error(e)
      }
    },
    async getAnnouncements() {
      try {
        const response = await fetch("/services/community/?action=getAnnouncements");
        const data = await response.json();
        this.state.announcements = data.data;
      }catch(e) {
        console.error(e)
      }
    },
    getLocalDate: function(date) {
      if(date && typeof date === 'string') {
        let newArr = [];
        newArr = date.split('.')
        let temp1 = newArr[0];
        newArr[0] = newArr[1];
        newArr[1] = temp1;
        const newString = newArr.join('.')
        const createdDate = new Date(newString)
        const month  = (createdDate.getMonth()).toString()
        const dateNumber = (createdDate.getDate()).toString()
        const locale = {
          '0': 'Января',
          '1': "Февраля",
          '2': 'Марта',
          '3': "Апреля",
          '4': 'Мая',
          '5': "Июня",
          '6': 'Июля',
          '7': "Августа",
          '8': 'Сентября',
          '9': "Октября",
          '10': 'Ноября',
          '11': "Декабря",
        }
        if(locale[month]) {
          return `${dateNumber} ${locale[month]}`
        }
      }
    },
    routerLink(params, option = 'router') {

      if(option === 'router') {
        this.$router.push(params)
      } else {
        window.location.href = params
      }
    },

  openModal() {
      this.$refs.modal.openModal()
  },
  openTnxModal() {
  this.showThanksMessage = true
},
  closeTnxModal() {
  this.showThanksMessage = false
    this.$refs.modal.closeModal()
},
},
}
</script>
<style >
</style>
