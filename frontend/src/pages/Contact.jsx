import { Footer } from "../Components/Footer";
import { Topbar } from "../Components/Topbar";
import { Map } from "../Components/Map";
import { Socials } from "../Components/Socials";
import { Feedbackform } from "../Components/FeedbackForm";
export function Contact() {
  return (
    <div>
      <Topbar></Topbar>
      <Map></Map>
      <Feedbackform></Feedbackform>
      <Socials></Socials>
      <Footer></Footer>
    </div>
  );
}