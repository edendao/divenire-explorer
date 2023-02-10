import { Avatar, AvatarProps, SxProps } from '@mui/material';
import { useMainnetEnsAvatar } from '../hooks/useMainnet';
import { emojiAvatarForAddress } from '../utils/emojiAvatarForAddress';

export type EnsAvatarProps = Omit<AvatarProps, 'src'> & {
  address?: `0x${string}`;
};

export default function EnsAvatar({ address, sx, ...others }: EnsAvatarProps) {
  const ensAvatar = useMainnetEnsAvatar(address);
  const emojiAvatar = emojiAvatarForAddress(address || '');

  return (
    <Avatar
      {...others}
      sx={{ ...sx, bgcolor: emojiAvatar.color }}
      src={ensAvatar || undefined}
    >
      {emojiAvatar.emoji}
    </Avatar>
  );
}
