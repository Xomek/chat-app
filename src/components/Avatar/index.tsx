import { BaseComponent } from "../../interfaces/BaseComponent.interface";
import { mcl } from "../../misc/myClassNames";
import styles from "./Avatar.module.scss";

export interface AvatarProps extends BaseComponent {
   imgUrl?: string;
   status: string;
}

const Avatar = ({
   imgUrl = "https://img.myloview.ru/posters/people-icon-isolated-on-white-background-person-icon-user-vector-icon-400-219882240.jpg",
   status,
   className,
}: AvatarProps) => {
   const AvatarStyles = mcl(styles.avatar, className);

   return <img className={AvatarStyles} alt="avatar" src={imgUrl} />;
};

export default Avatar;
