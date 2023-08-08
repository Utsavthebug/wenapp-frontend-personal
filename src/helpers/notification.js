import {notification as antdNotification} from 'antd'

export const notification = ({
  type = 'warning',
  message = '',
  description = '',
  duration = 4.5,
}) => {
  antdNotification[type]({
    message,
    description,
    duration,
  })
}
