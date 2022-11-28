import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LockIcon from "@mui/icons-material/Lock";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const shortAboutUs = [
  {
    id: 1,
    header: "Бесплатная доставка и возврат",
    title: "Бесплатная доставка при заказе от $99",
    icon: <LocalShippingIcon sx={{ fontSize: "35px", color: "#669900" }} />,
  },
  {
    id: 2,
    header: "Поддержка клиентов 24/7",
    title: "Мгновенный доступ к идеальной поддержке",
    icon: <SupportAgentIcon sx={{ fontSize: "35px", color: "#669900" }} />,
  },
  {
    id: 3,
    header: "100% безопасный платеж",
    title: "Мы гарантируем безопасную оплату",
    icon: <LockIcon sx={{ fontSize: "35px", color: "#669900" }} />,
  },
  {
    id: 4,
    header: "Подарочный сервис",
    title: "Служба поддержки подарков",
    icon: <CardGiftcardIcon sx={{ fontSize: "35px", color: "#669900" }} />,
  },
];

export default shortAboutUs;
