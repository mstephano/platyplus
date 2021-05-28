import { useHbp } from '@platyplus/hbp'
import { Icon, Dropdown, IconButton, Whisper, Popover } from 'rsuite'
import { WhisperInstance } from 'rsuite/lib/Whisper'
import React from 'react'
import { useAuth } from '@nhost/react-auth'

export const AuthStatusMenu = () => {
  const { auth } = useHbp()
  const { signedIn } = useAuth()
  const triggerRef = React.createRef<WhisperInstance>()
  if (signedIn)
    return (
      <Whisper
        placement="bottomEnd"
        trigger="hover"
        triggerRef={triggerRef}
        enterable
        speaker={
          <Popover full>
            <Dropdown.Menu>
              <Dropdown.Item
                icon={<Icon icon="sign-out" />}
                onSelect={async () => {
                  triggerRef.current.close()
                  await auth.logout()
                }}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Popover>
        }
      >
        <IconButton icon={<Icon icon="cog" />} circle appearance="ghost" />
      </Whisper>
    )
  else return null
}

export default AuthStatusMenu
