
import { useEffect } from 'react';

interface VoiceChatProps {
  position?: 'right' | 'left';
}

const VoiceChat = ({ position = 'right' }: VoiceChatProps) => {
  useEffect(() => {
    // Create the ElevenLabs Convai widget element
    const widget = document.createElement('elevenlabs-convai');
    widget.setAttribute('agent-id', '0YDALm9hQp9WU98F1fRh');
    
    // Add the widget to the body
    document.body.appendChild(widget);
    
    // Ensure widget is positioned correctly
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      elevenlabs-convai {
        position: fixed;
        ${position === 'right' ? 'right: 20px;' : 'left: 20px;'}
        bottom: 20px;
        z-index: 1000;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Cleanup function
    return () => {
      document.body.removeChild(widget);
      document.head.removeChild(styleElement);
    };
  }, [position]);
  
  // This component doesn't render anything visible itself
  // The widget is appended directly to the body
  return null;
};

export default VoiceChat;
