export type SocialTypeProps = number

export type MessageTypes = {
  message: string
  username: string
  platform: SocialTypeProps
}

export type TypeAnoniMeProps = {
  children?: React.ReactNode
}

export type TypeAnoniMeTypes = {
  loading: boolean
  users?: any[]
  noUserFound?: boolean
  searchUser: (username: string) => void
  handleCreateMessage: (values: MessageTypes) => void
}

export type OptionProps = {
  value: string;
  id?: string
  username: string
  type: SocialTypeProps;
  label: JSX.Element;
}
