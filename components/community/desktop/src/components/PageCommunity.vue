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
        "banners": [],
        "communities": [
          {
            "ID": "212438",
            "NAME": "Эксперты по содержанию кошек",
            "ACTIVE": "Y",
            "LIST_PAGE_URL": "",
            "SECTION_PAGE_URL": "/services/community/?action=getCommunity&community_id=212438",
            "UF_PREVIEW_PICTURE": "/upload/uf/8c1/8zjfgei4ipvocw4jmo21a5153er0o8yl/Кошки.png"
          },
          {
            "ID": "212439",
            "NAME": "Эксперты по содержанию собак",
            "ACTIVE": "Y",
            "LIST_PAGE_URL": "",
            "SECTION_PAGE_URL": "/services/community/?action=getCommunity&community_id=212439",
            "UF_PREVIEW_PICTURE": "/upload/uf/3a8/as36pr3bph5wxlvbfn5jbhk3iow0133t/Собаки.png"
          },
          {
            "ID": "212440",
            "NAME": "Эксперты по содержанию грызунообразных",
            "ACTIVE": "Y",
            "LIST_PAGE_URL": "",
            "SECTION_PAGE_URL": "/services/community/?action=getCommunity&community_id=212440",
            "UF_PREVIEW_PICTURE": "/upload/uf/ac5/it714ur0iiyiq3hgxs96m66nahntyrbf/Грызуны.png"
          },
          {
            "ID": "212441",
            "NAME": "Эксперты по аквариумистике и террариумистике",
            "ACTIVE": "Y",
            "LIST_PAGE_URL": "",
            "SECTION_PAGE_URL": "/services/community/?action=getCommunity&community_id=212441",
            "UF_PREVIEW_PICTURE": ""
          },
          {
            "ID": "212442",
            "NAME": "Эксперты по содержанию птиц",
            "ACTIVE": "Y",
            "LIST_PAGE_URL": "",
            "SECTION_PAGE_URL": "/services/community/?action=getCommunity&community_id=212442",
            "UF_PREVIEW_PICTURE": ""
          }
        ],
        "announcements": [],
        "paginatedData": [
          {
            "ID": "351596217",
            "ACTIVE": "Y",
            "NAME": "Что требуется для содержания йоркширского терьера?",
            "CREATED_DATE": "2023.11.07",
            "PROPERTY_ANSWER_VALUE": {
              "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
              "TYPE": "TEXT"
            },
            "PROPERTY_ANSWER_VALUE_ID": "1247749998",
            "LIKES": "2",
            "ALREADY_LIKED": true,
            "VIEWS": "3",
            "ALREADY_VIEWED": true
          },
          {
            "ID": "351596219",
            "ACTIVE": "Y",
            "NAME": "Какое обмундирование нужно для собаки?",
            "CREATED_DATE": "2023.11.07",
            "PROPERTY_ANSWER_VALUE": {
              "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
              "TYPE": "TEXT"
            },
            "PROPERTY_ANSWER_VALUE_ID": "1247750000",
            "LIKES": "2",
            "ALREADY_LIKED": true,
            "VIEWS": "3",
            "ALREADY_VIEWED": true
          },
          {
            "ID": "351596220",
            "ACTIVE": "Y",
            "NAME": "Как, где и когда начинать дрессировать собаку?",
            "CREATED_DATE": "2023.11.07",
            "PROPERTY_ANSWER_VALUE": {
              "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
              "TYPE": "TEXT"
            },
            "PROPERTY_ANSWER_VALUE_ID": "1247750001",
            "LIKES": "1",
            "ALREADY_LIKED": true,
            "VIEWS": "4",
            "ALREADY_VIEWED": true
          },
          {
            "ID": "351596264",
            "ACTIVE": "Y",
            "NAME": "Сколько времени занимает прогулка с собакой?2",
            "CREATED_DATE": "2023.12.04",
            "PROPERTY_ANSWER_VALUE": {
              "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
              "TYPE": "TEXT"
            },
            "PROPERTY_ANSWER_VALUE_ID": "1247750159",
            "LIKES": "3",
            "ALREADY_LIKED": true,
            "VIEWS": "3",
            "ALREADY_VIEWED": true
          },
          {
            "ID": "351596265",
            "ACTIVE": "Y",
            "NAME": "Что требуется для содержания йоркширского терьера?2",
            "CREATED_DATE": "2023.12.04",
            "PROPERTY_ANSWER_VALUE": {
              "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
              "TYPE": "TEXT"
            },
            "PROPERTY_ANSWER_VALUE_ID": "1247750161",
            "LIKES": "1",
            "ALREADY_LIKED": false,
            "VIEWS": "2",
            "ALREADY_VIEWED": true
          }
        ],
        "educations": {
          "type": 3,
          "items": {
            "212444": {
              "ID": "212444",
              "~ID": "212444",
              "NAME": "Малые",
              "~NAME": "Малые",
              "DATE_CREATE": "13.11.2023 14:36:45",
              "~DATE_CREATE": "13.11.2023 14:36:45",
              "IBLOCK_ID": "1278",
              "~IBLOCK_ID": "1278",
              "ACTIVE": "Y",
              "~ACTIVE": "Y",
              "SORT": "500",
              "~SORT": "500",
              "PICTURE": "/local/templates/light_red/images/no-education.png",
              "~PICTURE": null,
              "LEFT_MARGIN": "28",
              "~LEFT_MARGIN": "28",
              "RIGHT_MARGIN": "35",
              "~RIGHT_MARGIN": "35",
              "DEPTH_LEVEL": "2",
              "~DEPTH_LEVEL": "2",
              "DESCRIPTION": "",
              "~DESCRIPTION": "",
              "DETAIL_PICTURE": null,
              "~DETAIL_PICTURE": null,
              "IBLOCK_SECTION_ID": "212443",
              "~IBLOCK_SECTION_ID": "212443",
              "DESCRIPTION_TYPE": "text",
              "~DESCRIPTION_TYPE": "text",
              "subfolders": [
                {
                  "ID": "212447",
                  "~ID": "212447",
                  "NAME": "Йоркширский терьер",
                  "~NAME": "Йоркширский терьер",
                  "DATE_CREATE": "13.11.2023 14:37:44",
                  "~DATE_CREATE": "13.11.2023 14:37:44",
                  "IBLOCK_ID": "1278",
                  "~IBLOCK_ID": "1278",
                  "ACTIVE": "Y",
                  "~ACTIVE": "Y",
                  "SORT": "500",
                  "~SORT": "500",
                  "PICTURE": "/local/templates/light_red/images/no-education.png",
                  "~PICTURE": null,
                  "LEFT_MARGIN": "29",
                  "~LEFT_MARGIN": "29",
                  "RIGHT_MARGIN": "30",
                  "~RIGHT_MARGIN": "30",
                  "DEPTH_LEVEL": "3",
                  "~DEPTH_LEVEL": "3",
                  "DESCRIPTION": "",
                  "~DESCRIPTION": "",
                  "DETAIL_PICTURE": null,
                  "~DETAIL_PICTURE": null,
                  "IBLOCK_SECTION_ID": "212444",
                  "~IBLOCK_SECTION_ID": "212444",
                  "DESCRIPTION_TYPE": "text",
                  "~DESCRIPTION_TYPE": "text"
                },
                {
                  "ID": "212448",
                  "~ID": "212448",
                  "NAME": "Чихуахуа",
                  "~NAME": "Чихуахуа",
                  "DATE_CREATE": "13.11.2023 14:37:52",
                  "~DATE_CREATE": "13.11.2023 14:37:52",
                  "IBLOCK_ID": "1278",
                  "~IBLOCK_ID": "1278",
                  "ACTIVE": "Y",
                  "~ACTIVE": "Y",
                  "SORT": "500",
                  "~SORT": "500",
                  "PICTURE": "/local/templates/light_red/images/no-education.png",
                  "~PICTURE": null,
                  "LEFT_MARGIN": "31",
                  "~LEFT_MARGIN": "31",
                  "RIGHT_MARGIN": "32",
                  "~RIGHT_MARGIN": "32",
                  "DEPTH_LEVEL": "3",
                  "~DEPTH_LEVEL": "3",
                  "DESCRIPTION": "",
                  "~DESCRIPTION": "",
                  "DETAIL_PICTURE": null,
                  "~DETAIL_PICTURE": null,
                  "IBLOCK_SECTION_ID": "212444",
                  "~IBLOCK_SECTION_ID": "212444",
                  "DESCRIPTION_TYPE": "text",
                  "~DESCRIPTION_TYPE": "text"
                },
                {
                  "ID": "212449",
                  "~ID": "212449",
                  "NAME": "Ши-тцу",
                  "~NAME": "Ши-тцу",
                  "DATE_CREATE": "13.11.2023 14:37:59",
                  "~DATE_CREATE": "13.11.2023 14:37:59",
                  "IBLOCK_ID": "1278",
                  "~IBLOCK_ID": "1278",
                  "ACTIVE": "Y",
                  "~ACTIVE": "Y",
                  "SORT": "500",
                  "~SORT": "500",
                  "PICTURE": "/local/templates/light_red/images/no-education.png",
                  "~PICTURE": null,
                  "LEFT_MARGIN": "33",
                  "~LEFT_MARGIN": "33",
                  "RIGHT_MARGIN": "34",
                  "~RIGHT_MARGIN": "34",
                  "DEPTH_LEVEL": "3",
                  "~DEPTH_LEVEL": "3",
                  "DESCRIPTION": "",
                  "~DESCRIPTION": "",
                  "DETAIL_PICTURE": null,
                  "~DETAIL_PICTURE": null,
                  "IBLOCK_SECTION_ID": "212444",
                  "~IBLOCK_SECTION_ID": "212444",
                  "DESCRIPTION_TYPE": "text",
                  "~DESCRIPTION_TYPE": "text"
                }
              ]
            },
            "212445": {
              "ID": "212445",
              "~ID": "212445",
              "NAME": "Средние",
              "~NAME": "Средние",
              "DATE_CREATE": "13.11.2023 14:36:53",
              "~DATE_CREATE": "13.11.2023 14:36:53",
              "IBLOCK_ID": "1278",
              "~IBLOCK_ID": "1278",
              "ACTIVE": "Y",
              "~ACTIVE": "Y",
              "SORT": "500",
              "~SORT": "500",
              "PICTURE": "/local/templates/light_red/images/no-education.png",
              "~PICTURE": null,
              "LEFT_MARGIN": "36",
              "~LEFT_MARGIN": "36",
              "RIGHT_MARGIN": "43",
              "~RIGHT_MARGIN": "43",
              "DEPTH_LEVEL": "2",
              "~DEPTH_LEVEL": "2",
              "DESCRIPTION": "",
              "~DESCRIPTION": "",
              "DETAIL_PICTURE": null,
              "~DETAIL_PICTURE": null,
              "IBLOCK_SECTION_ID": "212443",
              "~IBLOCK_SECTION_ID": "212443",
              "DESCRIPTION_TYPE": "text",
              "~DESCRIPTION_TYPE": "text",
              "subfolders": [
                {
                  "ID": "212450",
                  "~ID": "212450",
                  "NAME": "Английский кокер-спаниель",
                  "~NAME": "Английский кокер-спаниель",
                  "DATE_CREATE": "13.11.2023 14:38:18",
                  "~DATE_CREATE": "13.11.2023 14:38:18",
                  "IBLOCK_ID": "1278",
                  "~IBLOCK_ID": "1278",
                  "ACTIVE": "Y",
                  "~ACTIVE": "Y",
                  "SORT": "500",
                  "~SORT": "500",
                  "PICTURE": "/local/templates/light_red/images/no-education.png",
                  "~PICTURE": null,
                  "LEFT_MARGIN": "37",
                  "~LEFT_MARGIN": "37",
                  "RIGHT_MARGIN": "38",
                  "~RIGHT_MARGIN": "38",
                  "DEPTH_LEVEL": "3",
                  "~DEPTH_LEVEL": "3",
                  "DESCRIPTION": "",
                  "~DESCRIPTION": "",
                  "DETAIL_PICTURE": null,
                  "~DETAIL_PICTURE": null,
                  "IBLOCK_SECTION_ID": "212445",
                  "~IBLOCK_SECTION_ID": "212445",
                  "DESCRIPTION_TYPE": "text",
                  "~DESCRIPTION_TYPE": "text"
                },
                {
                  "ID": "212451",
                  "~ID": "212451",
                  "NAME": "Басенджи",
                  "~NAME": "Басенджи",
                  "DATE_CREATE": "13.11.2023 14:38:43",
                  "~DATE_CREATE": "13.11.2023 14:38:43",
                  "IBLOCK_ID": "1278",
                  "~IBLOCK_ID": "1278",
                  "ACTIVE": "Y",
                  "~ACTIVE": "Y",
                  "SORT": "500",
                  "~SORT": "500",
                  "PICTURE": "/local/templates/light_red/images/no-education.png",
                  "~PICTURE": null,
                  "LEFT_MARGIN": "39",
                  "~LEFT_MARGIN": "39",
                  "RIGHT_MARGIN": "40",
                  "~RIGHT_MARGIN": "40",
                  "DEPTH_LEVEL": "3",
                  "~DEPTH_LEVEL": "3",
                  "DESCRIPTION": "",
                  "~DESCRIPTION": "",
                  "DETAIL_PICTURE": null,
                  "~DETAIL_PICTURE": null,
                  "IBLOCK_SECTION_ID": "212445",
                  "~IBLOCK_SECTION_ID": "212445",
                  "DESCRIPTION_TYPE": "text",
                  "~DESCRIPTION_TYPE": "text"
                },
                {
                  "ID": "212452",
                  "~ID": "212452",
                  "NAME": "Бигль",
                  "~NAME": "Бигль",
                  "DATE_CREATE": "13.11.2023 14:38:51",
                  "~DATE_CREATE": "13.11.2023 14:38:51",
                  "IBLOCK_ID": "1278",
                  "~IBLOCK_ID": "1278",
                  "ACTIVE": "Y",
                  "~ACTIVE": "Y",
                  "SORT": "500",
                  "~SORT": "500",
                  "PICTURE": "/local/templates/light_red/images/no-education.png",
                  "~PICTURE": null,
                  "LEFT_MARGIN": "41",
                  "~LEFT_MARGIN": "41",
                  "RIGHT_MARGIN": "42",
                  "~RIGHT_MARGIN": "42",
                  "DEPTH_LEVEL": "3",
                  "~DEPTH_LEVEL": "3",
                  "DESCRIPTION": "",
                  "~DESCRIPTION": "",
                  "DETAIL_PICTURE": null,
                  "~DETAIL_PICTURE": null,
                  "IBLOCK_SECTION_ID": "212445",
                  "~IBLOCK_SECTION_ID": "212445",
                  "DESCRIPTION_TYPE": "text",
                  "~DESCRIPTION_TYPE": "text"
                }
              ]
            },
            "212446": {
              "ID": "212446",
              "~ID": "212446",
              "NAME": "Большие",
              "~NAME": "Большие",
              "DATE_CREATE": "13.11.2023 14:37:02",
              "~DATE_CREATE": "13.11.2023 14:37:02",
              "IBLOCK_ID": "1278",
              "~IBLOCK_ID": "1278",
              "ACTIVE": "Y",
              "~ACTIVE": "Y",
              "SORT": "500",
              "~SORT": "500",
              "PICTURE": "/local/templates/light_red/images/no-education.png",
              "~PICTURE": null,
              "LEFT_MARGIN": "20",
              "~LEFT_MARGIN": "20",
              "RIGHT_MARGIN": "27",
              "~RIGHT_MARGIN": "27",
              "DEPTH_LEVEL": "2",
              "~DEPTH_LEVEL": "2",
              "DESCRIPTION": "",
              "~DESCRIPTION": "",
              "DETAIL_PICTURE": null,
              "~DETAIL_PICTURE": null,
              "IBLOCK_SECTION_ID": "212443",
              "~IBLOCK_SECTION_ID": "212443",
              "DESCRIPTION_TYPE": "text",
              "~DESCRIPTION_TYPE": "text",
              "subfolders": [
                {
                  "ID": "212453",
                  "~ID": "212453",
                  "NAME": "Доберман",
                  "~NAME": "Доберман",
                  "DATE_CREATE": "13.11.2023 14:39:06",
                  "~DATE_CREATE": "13.11.2023 14:39:06",
                  "IBLOCK_ID": "1278",
                  "~IBLOCK_ID": "1278",
                  "ACTIVE": "Y",
                  "~ACTIVE": "Y",
                  "SORT": "500",
                  "~SORT": "500",
                  "PICTURE": "/local/templates/light_red/images/no-education.png",
                  "~PICTURE": null,
                  "LEFT_MARGIN": "21",
                  "~LEFT_MARGIN": "21",
                  "RIGHT_MARGIN": "22",
                  "~RIGHT_MARGIN": "22",
                  "DEPTH_LEVEL": "3",
                  "~DEPTH_LEVEL": "3",
                  "DESCRIPTION": "",
                  "~DESCRIPTION": "",
                  "DETAIL_PICTURE": null,
                  "~DETAIL_PICTURE": null,
                  "IBLOCK_SECTION_ID": "212446",
                  "~IBLOCK_SECTION_ID": "212446",
                  "DESCRIPTION_TYPE": "text",
                  "~DESCRIPTION_TYPE": "text"
                },
                {
                  "ID": "212454",
                  "~ID": "212454",
                  "NAME": "Золотистый ретривер",
                  "~NAME": "Золотистый ретривер",
                  "DATE_CREATE": "13.11.2023 14:39:13",
                  "~DATE_CREATE": "13.11.2023 14:39:13",
                  "IBLOCK_ID": "1278",
                  "~IBLOCK_ID": "1278",
                  "ACTIVE": "Y",
                  "~ACTIVE": "Y",
                  "SORT": "500",
                  "~SORT": "500",
                  "PICTURE": "/local/templates/light_red/images/no-education.png",
                  "~PICTURE": null,
                  "LEFT_MARGIN": "23",
                  "~LEFT_MARGIN": "23",
                  "RIGHT_MARGIN": "24",
                  "~RIGHT_MARGIN": "24",
                  "DEPTH_LEVEL": "3",
                  "~DEPTH_LEVEL": "3",
                  "DESCRIPTION": "",
                  "~DESCRIPTION": "",
                  "DETAIL_PICTURE": null,
                  "~DETAIL_PICTURE": null,
                  "IBLOCK_SECTION_ID": "212446",
                  "~IBLOCK_SECTION_ID": "212446",
                  "DESCRIPTION_TYPE": "text",
                  "~DESCRIPTION_TYPE": "text"
                },
                {
                  "ID": "212455",
                  "~ID": "212455",
                  "NAME": "Немецкая овчарка",
                  "~NAME": "Немецкая овчарка",
                  "DATE_CREATE": "13.11.2023 14:39:22",
                  "~DATE_CREATE": "13.11.2023 14:39:22",
                  "IBLOCK_ID": "1278",
                  "~IBLOCK_ID": "1278",
                  "ACTIVE": "Y",
                  "~ACTIVE": "Y",
                  "SORT": "500",
                  "~SORT": "500",
                  "PICTURE": "/local/templates/light_red/images/no-education.png",
                  "~PICTURE": null,
                  "LEFT_MARGIN": "25",
                  "~LEFT_MARGIN": "25",
                  "RIGHT_MARGIN": "26",
                  "~RIGHT_MARGIN": "26",
                  "DEPTH_LEVEL": "3",
                  "~DEPTH_LEVEL": "3",
                  "DESCRIPTION": "",
                  "~DESCRIPTION": "",
                  "DETAIL_PICTURE": null,
                  "~DETAIL_PICTURE": null,
                  "IBLOCK_SECTION_ID": "212446",
                  "~IBLOCK_SECTION_ID": "212446",
                  "DESCRIPTION_TYPE": "text",
                  "~DESCRIPTION_TYPE": "text"
                }
              ]
            }
          }
        },
        "community": {
          "ID": "212439",
          "NAME": "Эксперты по содержанию собак",
          "ACTIVE": "Y",
          "LIST_PAGE_URL": "",
          "SECTION_PAGE_URL": "#SITE_DIR#/services/community/?action=getCommunity&community_id=#SECTION_ID#",
          "UF_PREVIEW_PICTURE": "/upload/uf/3a8/as36pr3bph5wxlvbfn5jbhk3iow0133t/Собаки.png",
          "UF_DETAIL_PICTURE": "/upload/resize_cache/uf/f90/r9mnycm2ncdtd1eej3k7n5psyz0z8ukz/1200_1020_1/bann.png",
          "EXPERTS": [
            {
              "ID": "351596215",
              "ACTIVE": "Y",
              "NAME": "Эксперт по кокерам",
              "CREATED_DATE": "2023.11.07",
              "PROPERTY_EMPLOYEES_VALUE": "49250",
              "PROPERTY_EMPLOYEES_VALUE_ID": "1247749988",
              "EMPLOYEE": {
                "ID": "49250",
                "NAME": "Наталья",
                "LAST_NAME": "Нечипорова",
                "SECOND_NAME": "Андреевна",
                "PERSONAL_PHOTO": "/upload/main/240/image-01-07-20-03-11.jpeg",
                "WORK_POSITION": "Управляющий магазином",
                "LINK": "https://corp.4lapy.ru/company/personal/user/49250/"
              },
              "NUMBER_BACKGROUND": 1,
              "STYLE_STRING": "background: radial-gradient(56.33% 62.84% at 35.21% 75.5%, #F6B170 0%, rgba(255, 230, 202, 0.00) 60%),url('/local/templates/light_red/images/expert_bg1.png')"
            },
            {
              "ID": "351596214",
              "ACTIVE": "Y",
              "NAME": "Эксперт по йоркам и малым породам",
              "CREATED_DATE": "2023.11.07",
              "PROPERTY_EMPLOYEES_VALUE": "76101",
              "PROPERTY_EMPLOYEES_VALUE_ID": "1247749985",
              "EMPLOYEE": {
                "ID": "76101",
                "NAME": "Борис",
                "LAST_NAME": "Акименко",
                "SECOND_NAME": "Сергеевич",
                "PERSONAL_PHOTO": "/upload/main/e7e/WA0001.png",
                "WORK_POSITION": "Продакт-менеджер",
                "LINK": "https://corp.4lapy.ru/company/personal/user/76101/"
              },
              "NUMBER_BACKGROUND": 2,
              "STYLE_STRING": "background: radial-gradient(56.33% 62.84% at 35.21% 75.5%, #EBB749 0%, rgba(235, 183, 73, 0.00) 60%),url('/local/templates/light_red/images/expert_bg2.png')"
            },
            {
              "ID": "351596214",
              "ACTIVE": "Y",
              "NAME": "Эксперт по йоркам и малым породам",
              "CREATED_DATE": "2023.11.07",
              "PROPERTY_EMPLOYEES_VALUE": "86032",
              "PROPERTY_EMPLOYEES_VALUE_ID": "1247749986",
              "EMPLOYEE": {
                "ID": "86032",
                "NAME": "Вадим",
                "LAST_NAME": "Аддео",
                "SECOND_NAME": "",
                "PERSONAL_PHOTO": "/upload/main/753/pps1b2wcrctxmjoahw33yjhmmxwa12u3/2.png",
                "WORK_POSITION": "",
                "LINK": "https://corp.4lapy.ru/company/personal/user/86032/"
              },
              "NUMBER_BACKGROUND": 3,
              "STYLE_STRING": "background: radial-gradient(56.33% 62.84% at 35.21% 75.5%, #F1D646 0%, rgba(253, 236, 142, 0.00) 60%),url('/local/templates/light_red/images/expert_bg3.png')"
            }
          ],
          "QUESTIONS": [
            {
              "ID": "351596217",
              "ACTIVE": "Y",
              "NAME": "Что требуется для содержания йоркширского терьера?",
              "CREATED_DATE": "2023.11.07",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247749998",
              "LIKES": "2",
              "ALREADY_LIKED": true,
              "VIEWS": "3",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596219",
              "ACTIVE": "Y",
              "NAME": "Какое обмундирование нужно для собаки?",
              "CREATED_DATE": "2023.11.07",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750000",
              "LIKES": "2",
              "ALREADY_LIKED": true,
              "VIEWS": "3",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596220",
              "ACTIVE": "Y",
              "NAME": "Как, где и когда начинать дрессировать собаку?",
              "CREATED_DATE": "2023.11.07",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750001",
              "LIKES": "1",
              "ALREADY_LIKED": true,
              "VIEWS": "4",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596264",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?2",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750159",
              "LIKES": "3",
              "ALREADY_LIKED": true,
              "VIEWS": "3",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596265",
              "ACTIVE": "Y",
              "NAME": "Что требуется для содержания йоркширского терьера?2",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750161",
              "LIKES": "1",
              "ALREADY_LIKED": false,
              "VIEWS": "2",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596266",
              "ACTIVE": "Y",
              "NAME": "Какое обмундирование нужно для собаки?2",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750163",
              "LIKES": "1",
              "ALREADY_LIKED": true,
              "VIEWS": "1",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596267",
              "ACTIVE": "Y",
              "NAME": "Как, где и когда начинать дрессировать собаку?2",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750165",
              "LIKES": "2",
              "ALREADY_LIKED": true,
              "VIEWS": "1",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596269",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?3",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750169",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": "2",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596270",
              "ACTIVE": "Y",
              "NAME": "Что требуется для содержания йоркширского терьера?3",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750171",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": "2",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596271",
              "ACTIVE": "Y",
              "NAME": "Какое обмундирование нужно для собаки?3",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750173",
              "LIKES": "1",
              "ALREADY_LIKED": true,
              "VIEWS": "1",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596272",
              "ACTIVE": "Y",
              "NAME": "Как, где и когда начинать дрессировать собаку?3",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750175",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": "1",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596273",
              "ACTIVE": "Y",
              "NAME": "Чем лучше кормить щенка лабрадора возрастом 3 месяца?3",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750177",
              "LIKES": "1",
              "ALREADY_LIKED": true,
              "VIEWS": "1",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596274",
              "ACTIVE": "Y",
              "NAME": "Чем лучше кормить щенка лабрадора возрастом 3 месяца?4",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750179",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": "1",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596275",
              "ACTIVE": "Y",
              "NAME": "Как, где и когда начинать дрессировать собаку?4",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750181",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": "1",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596276",
              "ACTIVE": "Y",
              "NAME": "Какое обмундирование нужно для собаки?4",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750183",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": "1",
              "ALREADY_VIEWED": true
            },
            {
              "ID": "351596277",
              "ACTIVE": "Y",
              "NAME": "Что требуется для содержания йоркширского терьера?4",
              "CREATED_DATE": "2023.12.04",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "Со взрослой собакой нужно гулять минимум два раза в день. В общей сложности выгул должен занимать 2–2,5 часа в день. За время прогулки нужно дать питомцу и физическую, и умственную нагрузку. Воспитательная часть прогулки должна проходить в тихом месте, чтобы собака как можно меньше отвлекалась и занимать минимум 20 минут.",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750185",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596284",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?4",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750207",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596285",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?5",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750209",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596286",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?5",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750211",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596287",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?5",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750213",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": "1",
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596288",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?5",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750215",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596289",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?5",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750217",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596290",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750219",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596291",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750221",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596292",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750223",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596293",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750225",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596294",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750227",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596295",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750229",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596296",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750231",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596297",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750233",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596298",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750235",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596299",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750237",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596300",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750239",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596301",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750241",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596302",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750243",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596303",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750245",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596304",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750247",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596306",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750251",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596307",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750253",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            },
            {
              "ID": "351596308",
              "ACTIVE": "Y",
              "NAME": "Сколько времени занимает прогулка с собакой?6",
              "CREATED_DATE": "2023.12.22",
              "PROPERTY_ANSWER_VALUE": {
                "TEXT": "<table>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>\r\nПервый колумн\r\n</td>\r\n<td>\r\nВторой колумн\r\n</td>\r\n<td>\r\nТретий колумн\r\n</td>\r\n<td>\r\nЧетвертый колумн\r\n</td>\r\n</tr>\r\n</table>",
                "TYPE": "TEXT"
              },
              "PROPERTY_ANSWER_VALUE_ID": "1247750255",
              "LIKES": 0,
              "ALREADY_LIKED": false,
              "VIEWS": 0,
              "ALREADY_VIEWED": false
            }
          ]
        }
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
      console.log(this.state)
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

    <h3 v-if="Object.keys(state.educations.items).length" class="banner-header">Обучающие материалы по породам</h3>
  <div v-if="state.educations?.type === 2 && Object.keys(state.educations.items).length">

    <div class="slider-kind-of-type-wrapper">
      <div class="slider-kind-of-animal-id">
        <Carousel
            :itemsToShow="Object.keys(state.educations.items).length >= 3 ? 3 : Object.keys(state.educations.items).length"
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
  <div v-if="state.educations?.type === 3 && Object.keys(state.educations.items).length">

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
