import { useNavigate } from "react-router-dom";

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import { logIn } from "ionicons/icons";

function Login() {
  //   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [alert] = useIonAlert();
  const [present, dismiss] = useIonLoading();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await present({ message: "Loading..." });

    // console.log("submit");
    setTimeout(() => {
      dismiss();
      if (Math.random() < 0.5) {
        alert({
          header: "Invalid credentials",
          message: "There is no user with that name and password.",
          buttons: [{ text: "Ok" }],
        });
      } else {
        navigate("/app/dashboard");
      }
    }, 1500);
  };

  return (
    <>
      <IonCard>
        <IonCardContent>
          <form onSubmit={onSubmit}>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email"></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>

            <div className="ion-margin-top">
              <IonButton expand="full" type="submit" color="secondary">
                <IonIcon icon={logIn} slot="start" />
                Login
              </IonButton>
            </div>
          </form>
        </IonCardContent>
      </IonCard>
    </>
  );
}

export default Login;
