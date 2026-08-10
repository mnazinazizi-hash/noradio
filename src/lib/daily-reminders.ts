export type ReminderPeriod = "Morning" | "Focus" | "Evening" | "Gratitude";

export type Reminder = {
  period: ReminderPeriod;
  title: string;
  body: string;
  icon: string;
};

// Edit or extend this library at any time. The app picks one message from each
// group every day, so adding more entries creates more possible daily draws.
export const reminderLibrary: Record<ReminderPeriod, Reminder[]> = {
  Morning: [
    ["Breathe deeply.", "Inhale calm, exhale the noise. The present moment is all there is.", "spa"],
    ["Begin gently.", "You do not need to rush into the day. Give yourself room to arrive.", "wb_sunny"],
    ["Meet the day with hope.", "There is possibility in this new morning, even if you cannot see all of it yet.", "light_mode"],
    ["Start where you are.", "You already have enough to take one kind, useful step forward.", "near_me"],
    ["Welcome the new day.", "This morning is a fresh page. Let it hold something good.", "menu_book"],
    ["Be here now.", "Before the plans begin, notice the breath, the light, and the life around you.", "visibility"],
    ["Choose a gentle thought.", "The way you speak to yourself can set the tone for the whole day.", "favorite"],
    ["Let calm lead.", "You can move through a full day without leaving yourself behind.", "self_improvement"],
    ["Make room for joy.", "A small pleasure—a song, a smile, a warm drink—can be enough for now.", "sentiment_satisfied"],
    ["Trust this beginning.", "You do not need every answer before you take the first step.", "explore"],
    ["Your pace is enough.", "There is no prize for rushing. Let your day unfold at a human pace.", "directions_walk"],
    ["Open your heart.", "Receive this day with curiosity, courage, and a little more softness.", "waving_hand"],
    ["Carry your light.", "What is good in you belongs in the rooms you enter today.", "flare"],
    ["You are allowed to begin again.", "A new morning does not ask you to be perfect—only present.", "refresh"],
  ].map(([title, body, icon]) => ({ period: "Morning", title, body, icon })),
  Focus: [
    ["One step at a time.", "Progress is not always a leap. Sometimes it is just moving one foot in front of the other.", "auto_awesome"],
    ["Make space for what matters.", "A clear no creates room for the right yes. Protect your attention today.", "center_focus_strong"],
    ["Trust your rhythm.", "Your pace is allowed to be your own. Steady progress is still progress.", "favorite"],
    ["Do the next kind thing.", "You do not have to solve everything. Start with what is within reach.", "volunteer_activism"],
    ["Keep it simple.", "The most important task is often smaller and quieter than the noisy ones.", "filter_alt"],
    ["Return to your intention.", "When the day pulls you in many directions, remember what matters most.", "ads_click"],
    ["Give yourself permission to pause.", "A short pause can bring more clarity than pushing through ever will.", "pause_circle"],
    ["Let progress be imperfect.", "Finished with care is more useful than perfect in your imagination.", "task_alt"],
    ["Protect your energy.", "Your attention is valuable. Spend it where it helps you grow.", "shield"],
    ["Stay with this moment.", "You only need to meet the work that is directly in front of you.", "timer"],
    ["Choose courage over comfort.", "The small brave choice is often the one that opens the next door.", "workspace_premium"],
    ["Your effort counts.", "Even the work no one sees is shaping a life you can be proud of.", "thumb_up"],
    ["Be patient with the process.", "Some things take time because they are worth building well.", "hourglass_top"],
    ["Come back to center.", "You can reset your focus as many times as you need today.", "my_location"],
  ].map(([title, body, icon]) => ({ period: "Focus", title, body, icon })),
  Evening: [
    ["Let go of today.", "Whatever happened, it is done. Rest your mind for tomorrow's dawn.", "nightlight"],
    ["You did enough.", "Release the unfinished list. Your worth has never depended on completing it all.", "bedtime"],
    ["Come back to yourself.", "The day may have pulled you in many directions. Now, return to your center.", "nights_stay"],
    ["Rest is productive too.", "Your body and mind need kindness, not another demand.", "hotel"],
    ["Put down what is heavy.", "Not every thought needs to come with you into the night.", "backpack"],
    ["Notice what went well.", "Even on difficult days, there may be one small moment worth holding close.", "stars"],
    ["Forgive the rough edges.", "You were learning, feeling, and trying. That is enough for one day.", "favorite_border"],
    ["Let silence hold you.", "You do not need to fill every quiet moment. Let stillness do its work.", "volume_off"],
    ["Make peace with unfinished things.", "Tomorrow will have its own time. Tonight belongs to rest.", "dark_mode"],
    ["Thank yourself.", "You showed up for your life today in ways both visible and unseen.", "celebration"],
    ["Release the comparison.", "Your path is not behind anyone else's. It is simply yours.", "compare_arrows"],
    ["Let the day soften.", "Allow the sharp moments to lose their edges as evening settles in.", "nights_stay"],
    ["You can begin again tomorrow.", "Nothing needs to be solved before sleep. Rest can be your next right step.", "restart_alt"],
    ["End with compassion.", "Speak to yourself tonight as you would speak to someone you deeply love.", "diversity_1"],
  ].map(([title, body, icon]) => ({ period: "Evening", title, body, icon })),
  Gratitude: [
    ["Cherish the small things.", "Happiness is found in the whispers of the wind and the warmth of a smile.", "favorite"],
    ["Notice what is good.", "A small kindness, a warm meal, or a quiet moment can be enough to brighten the day.", "wb_sunny"],
    ["Celebrate this moment.", "There is something here, right now, worth receiving with an open heart.", "celebration"],
    ["Let gratitude find you.", "You do not have to search far for a reason to be thankful today.", "search"],
    ["Keep a little wonder.", "The ordinary can still surprise you when you make room to notice it.", "auto_awesome"],
    ["Hold the good close.", "Let one meaningful moment remind you that life can be gentle too.", "volunteer_activism"],
    ["Thank the people around you.", "A sincere word of appreciation can make connection feel more possible.", "group"],
    ["Find beauty in the familiar.", "The places and people you know may hold more magic than you realised.", "local_florist"],
    ["Let joy be simple.", "You do not need a perfect day to enjoy one good thing within it.", "sentiment_satisfied"],
    ["Receive the little gifts.", "Sunlight, laughter, and a deep breath are all invitations to be present.", "redeem"],
    ["Remember how far you have come.", "The person you are today has already carried so much with courage.", "route"],
    ["Share a warm thought.", "Gratitude grows when it is expressed, even in the smallest way.", "chat"],
    ["Choose appreciation.", "What you water with attention often becomes more visible in your life.", "water_drop"],
    ["There is enough for this moment.", "For now, let the good that is here be enough.", "all_inclusive"],
  ].map(([title, body, icon]) => ({ period: "Gratitude", title, body, icon })),
};

function seedForToday() {
  const today = new Date();
  return Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86_400_000);
}

function seededIndex(seed: number, length: number) {
  const value = Math.sin(seed * 12.9898 + seed * seed * 0.0001) * 43_758.5453;
  return Math.floor((value - Math.floor(value)) * length);
}

export function getDailyReminders(): Reminder[] {
  const seed = seedForToday();
  return (["Morning", "Focus", "Evening", "Gratitude"] as ReminderPeriod[]).map((period, index) => {
    const messages = reminderLibrary[period];
    return messages[seededIndex(seed + index * 997, messages.length)];
  });
}
