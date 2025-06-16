export interface StoryState {
  text: string;
  choices?: {
    text: string;
    next: string;
  }[];
}

export const storyStates: Record<string, StoryState> = {
  start: {
    text: "Rain streaks down the library windows as you shelve the last book of your evening shift. The building is empty except for shadows and the sound of your footsteps on marble floors. As you reach for your coat, you hear the soft creak of leather boots behind you. You turn to find him standing in the doorway—tall, broad shoulders filling the frame, dark hair tousled from the storm, green eyes that make your stomach flutter. 'I was hoping I'd catch you before you left,' he says, his voice a low rumble that sends warmth spreading through your chest.",
    choices: [
      { text: "Ask what he needs this late", next: "curious" },
      { text: "Tell him the library is closed", next: "professional" },
    ],
  },
  curious: {
    text: "You set down your coat, pulse quickening despite yourself. 'What can I help you with?' His smile is devastating, slow and knowing. 'I've been watching you work,' he admits, taking a step closer. The way he moves is fluid, confident—like a man who knows exactly what he wants. 'The way you handle those old books, so gentle, so... thorough.' He's close enough now that you can smell his cologne—sandalwood and rain and something uniquely masculine. 'I have a rare collection at home. Perhaps you'd like to see it?' The invitation hangs between you, his eyes dark with promise.",
    choices: [
      { text: "Accept his invitation", next: "accept" },
      { text: "Suggest meeting somewhere public instead", next: "cautious" },
    ],
  },
  professional: {
    text: "'I know,' he says, not moving from the doorway. His presence fills the space, commanding and magnetic. 'But I'm not here for books.' Thunder rumbles overhead as he steps inside, closing the door behind him with deliberate slowness. 'I'm here for you.' Your breath catches as he approaches, all contained power and barely restrained hunger. 'Do you know what you do to me? Sitting here every day, lost in your books, completely unaware of how absolutely stunning you are?' His voice drops to a whisper. 'I've been going crazy thinking about you.'",
    choices: [
      { text: "Stand your ground", next: "defiant" },
      { text: "Ask what he wants", next: "nervous" },
    ],
  },
  accept: {
    text: "The drive to his place is electric with tension, rain drumming against the windows of his sleek car. He lives in a converted Victorian mansion, all dark wood and leather and masculine elegance. True to his word, shelves of rare books line the walls, but you're acutely aware of how alone you are with him. He pours you wine, his fingers deliberately brushing yours as he hands you the glass. 'You're shaking,' he observes, his voice soft but intense. 'Are you nervous?' Before you can answer, he's behind you, his chest solid against your back, lips brushing your ear. 'Let me take care of you.'",
  },
  cautious: {
    text: "'Smart girl,' he murmurs, approval evident in his voice. The praise makes you flush with unexpected pleasure. 'Café Luna tomorrow at eight?' You nod, not trusting your voice around this man who seems to see right through you. He steps closer, close enough that you can feel the heat radiating from his body. 'I'll be thinking about you tonight,' he whispers, his breath warm against your cheek. 'About what I want to do to you.' Then he's gone, leaving you alone with your racing heart and aching need.",
  },
  defiant: {
    text: "You straighten your spine, trying to ignore how your body responds to his proximity. 'You can't just waltz in here and—' But he's moving before you can finish, closing the distance between you in two strides. He doesn't touch you, but he's so close you can see the flecks of gold in his green eyes, feel the warmth of his breath. 'Can't what?' he challenges, his voice dropping to that dangerous whisper. 'Can't tell you that you've been driving me out of my mind? Can't admit that I think about you every single night?' Your back hits the bookshelf, trapped between leather spines and his overwhelming presence.",
  },
  nervous: {
    text: "'What do I want?' His laugh is low, rich, sending shivers down your spine. He braces one hand against the shelf beside your head, leaning in until you're drowning in his scent. 'I want to taste every inch of you. I want to hear you moan my name. I want to show you pleasures you've only read about in those romance novels you hide behind the desk.' Lightning illuminates his face, all sharp angles and raw desire. 'But mostly, I want you to stop pretending you don't feel this fire between us. I see it in your eyes, sweetheart. You want me just as much as I want you.'",
  },
};