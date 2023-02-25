export interface CreateMessageDTO {
  messaging_product: string;
  recipient_type: string;
  to: string;
  type: string;
  template: Template;
}

export interface Template {
  name: string;
  language: Language;
  components: Component[];
}

export interface Component {
  type: string;
  parameters: Parameter[];
}

export interface Parameter {
  type: string;
  image?: Image;
  text?: string;
}

export interface Image {
  link: string;
}

export interface Language {
  code: string;
}
