
interface VoiceChatProps {
  position?: 'right' | 'left';
}

const VoiceChat = ({ position = 'right' }: VoiceChatProps) => {
  // Component is now disabled
  return null;
};

export default VoiceChat;
