// lib/data.ts
// lib/urls.ts
export const imageUrls = [
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3ppxwxk1DJ7ijyP5AnO2kpulfoSXZEMWQ8arK",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3NQsI41fPUJfIuOEXWZiNTKsHcMyV58xYrqj2",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3UmrYNtXEN6pSTYzbLqX0gait4ndsIh1uKVZB",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3xTjqMPvuaho3YvtXgO7mIkbNiWT1Al8j2JG5",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3PaxJ2MBaAd5rE0S9LjWFGVD3ntfOoIKX1P2k",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3VIXx2gQpdMRnx40Y6uWwaXGfDrgKcU7s9CPm",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3dFWTTRmMUhlP16Hw2F4Zc0AqRDaQGixYrKWo",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3fPLxo0MkQ6KsSeCYRjuXDvgxGapwcBqWVnH3",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3SZb3notwxqHKzFNkSePR1LuiXahU5QBfp3Md",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3ppxwxk1DJ7ijyP5AnO2kpulfoSXZEMWQ8arK",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3NQsI41fPUJfIuOEXWZiNTKsHcMyV58xYrqj2",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3UmrYNtXEN6pSTYzbLqX0gait4ndsIh1uKVZB",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3xTjqMPvuaho3YvtXgO7mIkbNiWT1Al8j2JG5",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3PaxJ2MBaAd5rE0S9LjWFGVD3ntfOoIKX1P2k",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3VIXx2gQpdMRnx40Y6uWwaXGfDrgKcU7s9CPm",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3dFWTTRmMUhlP16Hw2F4Zc0AqRDaQGixYrKWo",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3fPLxo0MkQ6KsSeCYRjuXDvgxGapwcBqWVnH3",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3SZb3notwxqHKzFNkSePR1LuiXahU5QBfp3Md",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3ppxwxk1DJ7ijyP5AnO2kpulfoSXZEMWQ8arK",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3NQsI41fPUJfIuOEXWZiNTKsHcMyV58xYrqj2",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3UmrYNtXEN6pSTYzbLqX0gait4ndsIh1uKVZB",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3xTjqMPvuaho3YvtXgO7mIkbNiWT1Al8j2JG5",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3PaxJ2MBaAd5rE0S9LjWFGVD3ntfOoIKX1P2k",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3VIXx2gQpdMRnx40Y6uWwaXGfDrgKcU7s9CPm",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3dFWTTRmMUhlP16Hw2F4Zc0AqRDaQGixYrKWo",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3fPLxo0MkQ6KsSeCYRjuXDvgxGapwcBqWVnH3",
  "https://isfj6shkii.ufs.sh/f/7lSE5lws1RB3SZb3notwxqHKzFNkSePR1LuiXahU5QBfp3Md"
];
export type Victim = {
  id: string;
  name: string;
  age: number;
  email: string;
  fatherName: string;
  motherName: string;
  motherAddress: string;
  classmates: { name: string; email: string }[];
  course: string;
  school: string;
  ssn: string;
  tin: string;
  address: string;
  images: { src: string; caption: string; blurred: boolean }[];
  demand: {
    task: string;
    contact: string;
    deadlineHours: number;
  };
};

// === MAP REAL URLs INTO VICTIM IMAGES ===
const generateCaption = (url: string, index: number): string => {
  const filename = url.split("/").pop()?.split("?")[0] || `Media ${index + 1}`;
  const cleanName = decodeURIComponent(filename.split("_")[0].replace(/.jpg|.mp4$/i, ""));
  const dateMatch = cleanName.match(/(\d{4}-\d{2}-\d{2})/);
  const timeMatch = cleanName.match(/at (\d{2}\.\d{2}\.\d{2})/);
  const date = dateMatch ? dateMatch[0] : new Date().toISOString().split("T")[0];
  const time = timeMatch ? timeMatch[1].replace(/\./g, ":") : "Unknown Time";
  return `${cleanName} – ${date} ${time}`;
};

const victimImages = imageUrls.map((src, index) => ({
  src,
  caption: generateCaption(src, index),
  blurred: index > 7, // Only index 2 (3rd item) is UNBLURRED PROOF
}));

export const victims: Record<string, Victim> = {
  "wv-001": {
    id: "wv-001",
    name: "Olivia Marie Mitchell",
    age: 22,
    email: "olivia.mitchell@wvu.edu",
    fatherName: "Robert Miller",
    motherName: "Linda Miller",
    motherAddress: "509 W HERRING ROAD MASONTOWN, WV 26542",
    classmates: [
      { name: "Daisy Marie Dalrymple", email: "daisy.dalrymple@wvu.edu" },
      { name: "Sarah Lynn Lasko", email: "sarah.lasko@wvu.edu" },
      { name: "Kaylin Shae Walton", email: "kaylin.walton@wvu.edu" },
    ],
    course: "Agricultural Extension and Education",
    school: "West Virginia University",
    ssn: "232-51-9205",
    tin: "160089",
    address: "1 Newbrough Village, Morgantown, WV 26508",
    images: victimImages,
    demand: {
      task: "COMPLY OR BE RUINED: Your intimate media WILL be sent to ALL classmates, parents, and posted on WEST VIRGINIA social platforms (WVU Facebook groups, Morgantown Snapchat, Instagram, local forums). NO DELETE. NO MERCY.",
      contact: "Rogers Sanchez\nPhone: *********\nEmail: *******************\nAddress: 2005 Autumn Ridge Way, Spring Hill, TN",
      deadlineHours: 12,
    },
  },
};