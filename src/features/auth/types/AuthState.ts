export default interface AuthSate {
  login?: string; // ? - может прилететь пустой объект, приложение будет работать
  password?: string;
}
