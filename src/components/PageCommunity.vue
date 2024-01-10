<script >
import Modal from "@/components/Modal.vue";
import {Carousel, Pagination, Slide} from "vue3-carousel";
import ComponentAccordion from "@/components/Component-Accordion.vue";
import ComponentPagination from "@/components/Pagination.vue";

export default {
  name: 'PageCommunity',
  props: {
  },
  components: {
    ComponentPagination,
    ComponentAccordion,
    Pagination,
    Slide,
    Modal,
    Carousel,
  },
  data () {
    return {
      state: {
        banners: [],
        communities: [],
        announcements: [],
        paginatedData:[],
        educations:{},
        community: {}
      },
      formData: {
        action: 'askQuestion',
        question: '',
        community:  '',
        email: '',
      },
      settings: {
        itemsToShow: 4,
        itemsToScroll: 1,
        wrapAround: true,
        snapAlign: 'start'
      },

      selected: 'Сортировать',
      options: [
        {
          text: 'По разновидности'
        },
        {
          text: 'По породе'
        },
      ],
      searchInputValue: '',
      isDropDownVisible: false,
      showModal: false,
      showThanksMessage: false,
      isInFirstPage: true,
      currentPage: 1,
    };
  },
   created() {
    try {
       this.getCommunities();
      const id = this.$route.params.id
      // const id = this.$route.query.id;

       this.getCommunity(`/services/community/?action=getCommunity&community_id=${id}`)
       this.getEducation(`/services/community/?action=getCommunity&community_id=${id}`)
    } catch(e) {
      console.error(e)
    }
  },
  methods: {
    cleatSearchInputValue() {
      this.searchInputValue = '';
    },
    changeAmountLikes(id, action) {
      this.state.community.QUESTIONS = this.state.community.QUESTIONS.map((item) => {
        if(item.ID === id) {
        if(action === 'addLike'){
          item.ALREADY_LIKED = true
          item.LIKES =  Number(item.LIKES) + 1
        }
        if(action === 'removeLike') {
          item.ALREADY_LIKED = false
          item.LIKES =  Number(item.LIKES) - 1
        }
        }
        return item
      })
    },
    addView(id) {
      this.state.community.QUESTIONS = this.state.community.QUESTIONS.map((item) => {
        if(item.ID === id) {
            item.ALREADY_VIEWED = true
            item.VIEWS =  Number(item.VIEWS) + 1
        }
        return item
      })
    },
    clickToHeaderSelect() {
      if(this.isDropDownVisible) {
        document.removeEventListener('mouseup', this.closeSelectOnClickOutside);
        this.isDropDownVisible = false
      } else {
        document.addEventListener('mouseup', this.closeSelectOnClickOutside);
        this.isDropDownVisible = true
      }
    },
    async askQuestion() {
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

    selectOption(option) {
      this.selected = option.text;
      this.isDropDownVisible = false;
      document.removeEventListener('mouseup', this.closeSelectOnClickOutside);
    },
    closeSelectOnClickOutside(event) {
      const select = this.$refs.selectRef;
      if (!select.contains(event.target)) {
        this.isDropDownVisible = false
        document.removeEventListener('mouseup', this.closeSelectOnClickOutside);
      }
    },

    async getEducation(id) {
      const response = await fetch(`/services/community/?community_id=${id}&action=getEducation`);
      const data = await response.json();
      this.state.educations = data.data
    },
    async getEducationItems(id) {
      try {
        const response = await fetch(`/services/community/?action=getEducationItems&section_id=${id}`);
        const data = await response.json();
      }catch(e) {
        console.error(e)
      }
    },
    async getCommunities() {
      try {
        const response = await fetch("/services/community/?action=getCommunities");
        const data = await response.json();
        this.state.communities = data.data;
      }catch(e) {
        console.error(e)
      }

    },
    async getCommunity(id) {
      try {
        const response = await fetch(`${id}`);
        const data = await response.json();

        let previous = 0
        data.data.EXPERTS.forEach((item) => {
          if(previous < 4) {
            switch(previous) {
              case 3 :
                item.NUMBER_BACKGROUND = 4
                item.STYLE_STRING = "background: radial-gradient(56.33% 62.84% at 35.21% 75.5%, #FEEF90 0%, rgba(254, 239, 144, 0.00) 60%),url('/local/templates/light_red/images/expert_bg4.png')"
                previous += 1
                break
              case 2:
                item.NUMBER_BACKGROUND = 3
                item.STYLE_STRING = "background: radial-gradient(56.33% 62.84% at 35.21% 75.5%, #F1D646 0%, rgba(253, 236, 142, 0.00) 60%),url('/local/templates/light_red/images/expert_bg3.png')"
                previous += 1
                break
              case 1:
                item.NUMBER_BACKGROUND = 2
                item.STYLE_STRING = "background: radial-gradient(56.33% 62.84% at 35.21% 75.5%, #EBB749 0%, rgba(235, 183, 73, 0.00) 60%),url('/local/templates/light_red/images/expert_bg2.png')"
                previous += 1
                break
              case 0:
                item.NUMBER_BACKGROUND = 1
                item.STYLE_STRING = "background: radial-gradient(56.33% 62.84% at 35.21% 75.5%, #F6B170 0%, rgba(255, 230, 202, 0.00) 60%),url('/local/templates/light_red/images/expert_bg1.png')"
                previous += 1
                break
            }
          } else {
            item.NUMBER_BACKGROUND = 1
            item.STYLE_STRING = "background: radial-gradient(56.33% 62.84% at 35.21% 75.5%, #F6B170 0%, rgba(255, 230, 202, 0.00) 60%),url('/local/templates/light_red/images/expert_bg1.png')"
            previous = 1
          }
        })

        const newArr = [];
        for(let item in data.data.QUESTIONS) {
          if (data.data.QUESTIONS.hasOwnProperty(item)) {
            newArr.push(data.data.QUESTIONS[item])
          }
        }

        this.state.community = data.data;
        this.formData.community = data.data.NAME;
        this.state.community.QUESTIONS = newArr
        if(this.state.community.QUESTIONS.length < 5) {
          this.state.paginatedData = this.state.community.QUESTIONS
        }
        else {
          this.state.paginatedData = this.state.community.QUESTIONS.slice(0,5)
        }
      }catch(e) {
        console.error(e)
      }
    },
    onPageChange(page) {
      this.currentPage = page;
      this.currentPages()

    },
    currentPages() {
      const indexStart = ((this.currentPage - 1) * 5)
      const indexEnd = indexStart + 5

      this.state.paginatedData = this.state.community.QUESTIONS.slice(indexStart, indexEnd);
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
    linkKindOfAnimal(id) {
      // this.$router.push({name: 'BreedPage', params: {id: id }, query: {id: id }})
      this.$router.push({name: 'BreedPage', params: {id: id }})
    },
    linkPersonalExpert(link){
      // this.$router.push('//' + link)
      window.location.href = link
    }

  },
  computed: {
    amountPages() {
      if(this.state.community?.QUESTIONS) {

        if(this.state.community.QUESTIONS.length < 5) {
          return 1
        } else {
          return Math.ceil(this.state.community.QUESTIONS.length / 5)
        }
      }
      return false
    },
  },
}
</script>

<template>
    <div class="community-expert__main-banner">
      <div class="community-expert__main-banner_text" >{{ !state.community.UF_DETAIL_PICTURE ? state.community.NAME : ''}}</div>
      <img :src="`${ state.community.UF_DETAIL_PICTURE }`" alt="picture-animal" />
    </div>

<!--    <div class="community-expert__search-container">-->
<!--      <div class="community-expert__component_input">-->
<!--        <div class="community-expert__component_input-search">-->
<!--          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <g opacity="0.6">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833252 8.75016C0.833252 4.37793 4.37768 0.833496 8.74992 0.833496C13.1222 0.833496 16.6666 4.37793 16.6666 8.75016C16.6666 10.6361 16.0071 12.368 14.9062 13.7279L17.9671 16.7889C18.2926 17.1143 18.2926 17.6419 17.9671 17.9674C17.6417 18.2928 17.1141 18.2928 16.7886 17.9674L13.7277 14.9064C12.3678 16.0074 10.6359 16.6668 8.74992 16.6668C4.37768 16.6668 0.833252 13.1224 0.833252 8.75016ZM8.74992 2.50016C5.29816 2.50016 2.49992 5.2984 2.49992 8.75016C2.49992 12.2019 5.29816 15.0002 8.74992 15.0002C12.2017 15.0002 14.9999 12.2019 14.9999 8.75016C14.9999 5.2984 12.2017 2.50016 8.74992 2.50016ZM5.80364 5.38718C6.55678 4.6341 7.59957 4.16683 8.74992 4.16683C9.90026 4.16683 10.9431 4.63409 11.6962 5.3872C12.0216 5.71264 12.0216 6.24027 11.6962 6.56571C11.3707 6.89115 10.8431 6.89115 10.5177 6.56571C10.0644 6.1124 9.4405 5.8335 8.74992 5.8335C8.05935 5.8335 7.43548 6.1124 6.98211 6.56573C6.65666 6.89116 6.12903 6.89114 5.8036 6.56569C5.47818 6.24024 5.47819 5.7126 5.80364 5.38718Z" fill="black"/>-->
<!--            </g>-->
<!--          </svg>-->
<!--        </div>-->
<!--        <input class="community-expert__component_input-input" v-model="searchInputValue" placeholder="Найти..."/>-->
<!--        <div class="community-expert__component_input-clear" v-on:click="cleatSearchInputValue()">-->
<!--          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path d="M8.59966 7.9976L13.1021 3.4908C13.1815 3.41097 13.226 3.30292 13.226 3.19031C13.2259 3.0777 13.1812 2.96971 13.1017 2.89C12.9425 2.7316 12.6621 2.7308 12.5013 2.8908L8.00006 7.3976L3.49726 2.8896C3.33726 2.7316 3.05686 2.7324 2.89766 2.8904C2.85814 2.92975 2.82686 2.97659 2.80564 3.02816C2.78442 3.07974 2.77368 3.13503 2.77406 3.1908C2.77406 3.3044 2.81806 3.4108 2.89766 3.4896L7.40006 7.9972L2.89806 12.5052C2.81861 12.5851 2.77412 12.6933 2.77435 12.806C2.77457 12.9188 2.81949 13.0268 2.89926 13.1064C2.97646 13.1828 3.08566 13.2268 3.19846 13.2268H3.20086C3.31406 13.2264 3.42326 13.182 3.49886 13.1048L8.00006 8.598L12.5029 13.106C12.5825 13.1852 12.6889 13.2292 12.8017 13.2292C12.8574 13.2294 12.9127 13.2185 12.9643 13.1972C13.0158 13.1759 13.0627 13.1447 13.1021 13.1052C13.1415 13.0658 13.1728 13.019 13.1941 12.9674C13.2153 12.9158 13.2262 12.8606 13.2261 12.8048C13.2261 12.6916 13.1821 12.5848 13.1021 12.506L8.59966 7.9976Z" fill="#C4C4C4"/>-->
<!--          </svg>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="community-expert-select__wrapper" ref="selectRef">-->
<!--        <div class="community-expert-select" v-on:click=" clickToHeaderSelect() ">-->
<!--          <div class="community-expert-select__val" >-->
<!--            <div class="community-expert-select__val-filter">-->
<!--              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path d="M9.75197 17C9.51634 17 9.31964 16.9214 9.16186 16.7641C9.0041 16.6068 8.92522 16.4107 8.92522 16.1758V10.2006L3.12556 2.89012C2.98087 2.6978 2.96123 2.50137 3.06663 2.30083C3.17205 2.10028 3.3405 2 3.57199 2H16.428C16.6595 2 16.8279 2.10028 16.9334 2.30083C17.0388 2.50137 17.0191 2.6978 16.8744 2.89012L11.0748 10.2006V16.1758C11.0748 16.4107 10.9959 16.6068 10.8381 16.7641C10.6804 16.9214 10.4837 17 10.248 17H9.75197ZM10 9.82143L15.3202 3.07143H4.67985L10 9.82143Z" fill="black" fill-opacity="0.6"/>-->
<!--              </svg>-->
<!--            </div>-->
<!--            <div class="community-expert-select__val-header">{{selected}}</div>-->
<!--            <div class="community-expert-select__val-arrow">-->
<!--              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7559 12.4226C15.4305 12.748 14.9028 12.748 14.5774 12.4226L10.1667 8.01184L5.75592 12.4226C5.43049 12.748 4.90285 12.748 4.57741 12.4226C4.25197 12.0972 4.25197 11.5695 4.57741 11.2441L9.57741 6.24408C9.90285 5.91864 10.4305 5.91864 10.7559 6.24408L15.7559 11.2441C16.0814 11.5695 16.0814 12.0972 15.7559 12.4226Z" fill="#777776"/>-->
<!--              </svg>-->

<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="community-expert-select__dropdown" v-if="isDropDownVisible">-->
<!--          <div class="community-expert-select__dropdown__option" v-for="(option, i) in options" v-bind:key="i" v-on:click="selectOption(option)">-->
<!--            <div class="community-expert-text" >{{option.text}}</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <button class="bottom-container-btn community-expert-btn">Найти</button>-->
<!--    </div>-->

    <h3 v-if="state.community.EXPERTS.length" class="banner-header" >Эксперты</h3>
    <div v-if="state.community.EXPERTS.length" id="slider-experts" >
      <Carousel
          :itemsToShow="state.community.EXPERTS.length > 4 ? 4 : state.community.EXPERTS.length"
          :itemsToScroll="1"
          :snapAlign="'start'"
          :wrapAround="true"
      >
        <Slide
            v-for='(item, i) in state.community.EXPERTS'
            v-bind:key="i"
            >
          <div class="mobile-slider__slide item">
            <div class="slider-experts">
              <div class="slider-experts-link" @click="linkPersonalExpert(item.EMPLOYEE.LINK)">
                <div class="slider-experts-name">
                  <span>{{item.EMPLOYEE.NAME}} {{item.EMPLOYEE.LAST_NAME}}</span>
                </div>
                <div class="slider-experts-profile" >{{item.NAME}}</div>
                <div class="slider-experts-container-img" :style="item.STYLE_STRING" >
                  <img :src='`${item.EMPLOYEE.PERSONAL_PHOTO}`' alt="personal_photo" />
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <pagination />
        </template>
      </Carousel>
    </div>
    <h3 v-if="state.paginatedData.length" class="banner-header" >Часто задаваемые вопросы</h3>

    <div  v-if="state.paginatedData.length" class="community-expert__accordion-parent">
      <Component-Accordion
          v-for="(value, index) in state.paginatedData"
          v-bind:item="value"
          v-bind:index="index"
          v-bind:likes="value.LIKES ? Number(value.LIKES) : 0"
          v-bind:alreadyLiked="value.ALREADY_LIKED"
          v-bind:views="value.VIEWS ? Number(value.VIEWS): 0 "
          v-bind:alreadyViewed="value.ALREADY_VIEWED"
          v-bind:key="value.ID"
          @change-amount-likes="changeAmountLikes"
          @add-view="addView"
      >
      </Component-Accordion>
    </div>

    <Component-Pagination
        v-if="state.paginatedData.length"
        :total-pages="amountPages"
        :total="5"
        :per-page="5"
        :current-page="currentPage"
        @pagechanged="onPageChange"
    ></Component-Pagination>

    <button id="show-modal" @click="openModal()" class="bottom-container-btn ask-us">
      Задать вопрос</button>

    <h3 v-if="Object.keys(state.educations).length" class="banner-header">Обучающие материалы по породам</h3>
  <div v-if="state.educations?.type === 2 && Object.keys(state.educations).length">

    <div class="slider-kind-of-type-wrapper">
      <div class="slider-kind-of-animal-id">
        <Carousel
            :itemsToShow="state.educations.items.length > 3 ? 3: state.educations.items.length"
            :itemsToScroll="1"
            :snapAlign="'start'"
            :wrapAround="true"
        >
          <Slide
              v-for="(item, i) in state.educations.items"
              v-bind:key="i"
          >
            <div class="mobile-slider__slide item"  >
              <div class="slider-kind-of-animal">
                <div class="slider-kind-of-animal-container-img">
                  <div class="slider-kind-of-animal-link" @click="linkKindOfAnimal(item.ID)">
                    <img :src="item.PICTURE" alt="kind_of_animal">
                    <div class="slider-kind-of-animal-link_text"> {{item.NAME}}</div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>

          <template #addons>
            <pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
  <div v-if="state.educations?.type === 3 && Object.keys(state.educations).length">

  <div v-for="(value, name, index) in state.educations.items" v-bind:key="index" class="slider-kind-of-type-wrapper">
      <div v-if="value.subfolders?.length" class="community-expert__kind-of-animal">{{value.NAME}}</div>

      <div  v-if="value.subfolders?.length"  :id="`slider-kind-of-animal-${index}`" class="slider-kind-of-animal-id">
        <Carousel
            :itemsToShow="value.subfolders.length > 3 ? 3 : value.subfolders.length"
            :itemsToScroll="1"
            :snapAlign="'start'"
            :wrapAround="true"
        >
          <Slide
              v-for="(item, i) in value.subfolders"
              v-bind:key="i"
          >
            <div class="mobile-slider__slide item"  >
              <div class="slider-kind-of-animal">
                <div class="slider-kind-of-animal-container-img">
                  <div class="slider-kind-of-animal-link" @click="linkKindOfAnimal(item.ID)">
                    <img :src="item.PICTURE">
                    <div class="slider-kind-of-animal-link_text"> {{item.NAME}}</div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>


          <template #addons>
            <pagination />
          </template>
        </Carousel>

      </div>
    </div>
  </div>

  <Modal ref="modal" class="modal-community-expert">
     <template v-slot:header>
       <h3  v-if="!showThanksMessage">Задать вопрос эксперту</h3>
       <div v-if="showThanksMessage" class="modal-header-tnx-message">
         Спасибо за вопрос!
       </div>
     </template>
    <template v-slot:body>
        <div v-if="!showThanksMessage"  >
          <form class="form-modal" @submit.prevent="askQuestion()">
            <div>
              <label>Напишите ваш вопрос:</label>
              <textarea required v-model="formData.question" class="modal-textarea-no-resize" placeholder="Подскажите, чем нужно кормить щенка йоркширского терьера в возрасте 2 месяцев?" >
                </textarea>
            </div>
            <div>
              <label>Укажите вашу дополнительную почту для ответа:</label>
              <input required type="email"  v-model="formData.email">
            </div>
              <button type="submit" class="bottom-container-btn btn-bottom-modal btn-modal-community-expert" >
                Отправить вопрос
              </button>
            <div class="bottom-container-text">
              *Вы можете указать вашу личную почту, ответ придется на вашу личную почту и почту магазина
            </div>
          </form>
        </div>
        <div v-if="showThanksMessage" >
          <div class="modal-text-tnx-message">Мы свяжемся с вами в течение недели.</div>
          <div class="modal-text-tnx-img">
            <img  src="../assets/mainTnxPic.svg" alt="cat-pic">
          </div>
        </div>
    </template>
    <template v-slot:footer>
<!--      <div v-if="!showThanksMessage">-->
<!--        <button type="submit" class="bottom-container-btn btn-bottom-modal btn-modal-community-expert" >-->
<!--          Отправить вопрос-->
<!--        </button>-->
<!--      </div>-->
      <div v-if="showThanksMessage">
        <button class="bottom-container-btn btn-bottom-modal btn-modal-community-expert-tnx" v-on:click="closeTnxModal()">
          Вернуться
        </button>
      </div>
    </template>
    </Modal>
</template>

<style >
</style>
