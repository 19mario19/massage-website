// therapists
import lora from "../assets/Therapists/List/lora.jpg"
import irene from "../assets/Therapists/List/irene.jpg"
import eva from "../assets/Therapists/List/eva.jpg"
import canela from "../assets/Therapists/List/canela.jpg"
import vera from "../assets/Therapists/List/vera.jpg"
import alex from "../assets/Therapists/List/alex.jpg"
import yan from "../assets/Therapists/List/yan.jpg"
// product
import loraMain from "../assets/Product/lora.jpg"
import ireneMain from "../assets/Product/irene.jpg"
import evaMain from "../assets/Product/eva.jpg"
import canelaMain from "../assets/Product/canela.jpg"
import veraMain from "../assets/Product/vera.jpg"
import alexMain from "../assets/Product/alex.jpg"
import yanMain from "../assets/Product/yan.jpg"

import addId from "../helpers/addId"
const therapistsListOriginal = [
  {
    name: "Lora",
    position: "Therapist",
    picture: lora,
    productImage: loraMain,
    description:
      "Lora is a highly skilled therapist with a passion for helping clients achieve relaxation and relief. With over a decade of experience, she has honed her craft to provide the utmost care and personalized treatments. Lora's soothing touch and deep understanding of various massage techniques make her a sought-after therapist. Whether you're dealing with muscle tension, stress, or simply want to pamper yourself, Lora can tailor her sessions to meet your specific needs. Her warm and compassionate nature creates a welcoming atmosphere where you can unwind and rejuvenate. Experience the transformative power of massage with Lora.",
  },
  {
    name: "Irene",
    position: "Therapist",
    picture: irene,
    productImage: ireneMain,
    description:
      "Irene is a one-of-a-kind therapist renowned for her exceptional massage skills. With a decade of experience, she has perfected the art of relaxation and healing through touch. Irene's massages are known for their quality, and her ability to soothe and loosen muscles is unmatched. Although our therapists cover all of Greater London, Irene stands out for her therapeutic prowess. If you're seeking a soothing massage or deep muscle relief, Irene is the therapist for you. Her dedication to helping clients achieve optimal well-being is evident in every session. Discover the benefits of Irene's expert care today.",
  },
  {
    name: "Eva",
    position: "Therapist",
    picture: eva,
    productImage: evaMain,
    description:
      "Meet Eva, a dedicated therapist with a knack for relieving stress and tension. With years of experience, she has fine-tuned her therapeutic techniques to rejuvenate both body and mind. Eva's calming presence and skillful hands make her a favorite among our clients seeking relaxation and renewal. Whether you're dealing with the demands of a hectic lifestyle or need a moment of serenity, Eva's sessions can transport you to a state of blissful relaxation. Her commitment to holistic well-being shines through in every massage, making her a trusted choice for those seeking genuine rejuvenation.",
  },
  {
    name: "Canela",
    position: "Therapist",
    picture: canela,
    productImage: canelaMain,
    description:
      "Canela is a therapist known for her personalized approach to wellness. With extensive training and a deep belief in the healing power of massage, she tailors each session to meet your unique needs. Her gentle touch and in-depth understanding of the body's mechanics make her a trusted choice for those in need of targeted therapy. Whether you're recovering from an injury or simply seeking relaxation, Canela can provide a therapeutic experience that leaves you feeling revitalized and balanced. Experience the transformative effects of massage therapy with Canela.",
  },
  {
    name: "Vera",
    position: "Therapist",
    picture: vera,
    productImage: veraMain,
    description:
      "Vera is an experienced therapist specializing in a wide range of massage techniques. With a holistic approach to healing, she customizes each session to address your specific concerns. Whether you're recovering from an injury or simply in need of some self-care, Vera's expertise shines through in every session. She's dedicated to helping you achieve optimal relaxation and well-being. With Vera, you'll discover the benefits of expert care and experience a sense of renewal like never before.",
  },
  {
    name: "Alex",
    position: "Therapist",
    picture: alex,
    productImage: alexMain,
    description:
      "Alex is a skilled therapist dedicated to providing holistic healing through massage. With a deep understanding of anatomy and a nurturing touch, Alex's sessions leave clients feeling revitalized and balanced. He believes in the transformative power of massage to enhance both physical and mental well-being. Alex offers a range of massage techniques tailored to your specific needs, whether you seek relaxation or targeted therapy. Experience the rejuvenating effects of massage with Alex, where care and expertise combine for a truly exceptional wellness journey.",
  },
  {
    name: "Yan",
    position: "Therapist",
    picture: yan,
    productImage: yanMain,
    description:
      "Meet Yan, a therapist known for his versatility and adaptability. With a commitment to meeting your unique needs, Yan offers a wide range of massage styles. Whether you require deep tissue work or a gentle, soothing massage, Yan has you covered. His goal is to help you achieve optimal relaxation and well-being, and he tailors each session accordingly. With Yan, you can expect a personalized approach to wellness that leaves you feeling refreshed and rejuvenated. Experience the benefits of expert care and embark on a journey to better health with Yan.",
  },
]

const therapistsList = addId(therapistsListOriginal)

export default therapistsList
