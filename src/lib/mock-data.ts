// ─── Wallets ───────────────────────────────────────────────────────────────

export interface Wallet {
  id: string;
  address: string;
  label: string;
  network: string;
  farmingScore: number;
  lastActive: string;
  txCount: number;
}

export const wallets: Wallet[] = [
  {
    id: "w1",
    address: "0x4Cd6...d19F",
    label: "Main Wallet",
    network: "Ethereum",
    farmingScore: 87,
    lastActive: "2024-05-10",
    txCount: 142,
  },
  {
    id: "w2",
    address: "0x9aB3...3c7E",
    label: "Farming Batch 1",
    network: "Arbitrum",
    farmingScore: 73,
    lastActive: "2024-05-09",
    txCount: 98,
  },
  {
    id: "w3",
    address: "0x1fE8...77aD",
    label: "Burner",
    network: "Linea",
    farmingScore: 45,
    lastActive: "2024-05-07",
    txCount: 34,
  },
  {
    id: "w4",
    address: "0x72Bb...0eC2",
    label: "Farming Batch 2",
    network: "Arbitrum",
    farmingScore: 61,
    lastActive: "2024-05-08",
    txCount: 57,
  },
];

// ─── Recent Activity ────────────────────────────────────────────────────────

export interface Activity {
  id: string;
  wallet: string;
  network: string;
  action: "SWAP" | "BRIDGE" | "MINT" | "STAKE";
  protocol: string;
  amount: string;
  date: string;
  txHash: string;
}

export const recentActivity: Activity[] = [
  {
    id: "a1",
    wallet: "0x4Cd6...d19F",
    network: "Ethereum",
    action: "SWAP",
    protocol: "Uniswap",
    amount: "1.25 ETH",
    date: "2024-05-10 14:22",
    txHash: "0xd8f3...b44a",
  },
  {
    id: "a2",
    wallet: "0x9aB3...3c7E",
    network: "Arbitrum",
    action: "BRIDGE",
    protocol: "LayerBank",
    amount: "500 USDC",
    date: "2024-05-10 12:05",
    txHash: "0x9c2a...f771",
  },
  {
    id: "a3",
    wallet: "0x1fE8...77aD",
    network: "Linea",
    action: "SWAP",
    protocol: "SyncSwap",
    amount: "0.8 ETH",
    date: "2024-05-09 21:48",
    txHash: "0x3e5b...cc20",
  },
  {
    id: "a4",
    wallet: "0x72Bb...0eC2",
    network: "Arbitrum",
    action: "STAKE",
    protocol: "Mendi Finance",
    amount: "200 ARB",
    date: "2024-05-09 17:33",
    txHash: "0x7f1d...89e3",
  },
  {
    id: "a5",
    wallet: "0x4Cd6...d19F",
    network: "Ethereum",
    action: "MINT",
    protocol: "Uniswap",
    amount: "1 NFT",
    date: "2024-05-09 11:15",
    txHash: "0xa2c9...5512",
  },
  {
    id: "a6",
    wallet: "0x9aB3...3c7E",
    network: "Arbitrum",
    action: "SWAP",
    protocol: "SyncSwap",
    amount: "300 USDC",
    date: "2024-05-08 09:50",
    txHash: "0xb7e4...0a9f",
  },
  {
    id: "a7",
    wallet: "0x1fE8...77aD",
    network: "Linea",
    action: "BRIDGE",
    protocol: "LayerBank",
    amount: "0.5 ETH",
    date: "2024-05-07 22:14",
    txHash: "0xc1a8...d321",
  },
  {
    id: "a8",
    wallet: "0x72Bb...0eC2",
    network: "Arbitrum",
    action: "SWAP",
    protocol: "Mendi Finance",
    amount: "150 USDT",
    date: "2024-05-07 16:40",
    txHash: "0xe6b3...7718",
  },
];

// ─── Tasks ──────────────────────────────────────────────────────────────────

export type TaskStatus = "completed" | "in-progress" | "not-started";

export interface Task {
  id: string;
  title: string;
  protocol: string;
  network: string;
  progress: number;
  total: number;
  unit: string;
  status: TaskStatus;
  description: string;
}

export const tasks: Task[] = [
  {
    id: "t1",
    title: "SyncSwap Volume Target",
    protocol: "SyncSwap",
    network: "Linea",
    progress: 8,
    total: 10,
    unit: "swaps",
    status: "in-progress",
    description: "Complete swap transactions to hit weekly volume target",
  },
  {
    id: "t2",
    title: "LayerBank Deposits",
    protocol: "LayerBank",
    network: "Arbitrum",
    progress: 5,
    total: 5,
    unit: "deposits",
    status: "completed",
    description: "Deposit assets into LayerBank lending protocol",
  },
  {
    id: "t3",
    title: "Mendi Finance Staking",
    protocol: "Mendi Finance",
    network: "Arbitrum",
    progress: 2,
    total: 10,
    unit: "stakes",
    status: "in-progress",
    description: "Stake ARB tokens across different pools",
  },
  {
    id: "t4",
    title: "Uniswap LP Provision",
    protocol: "Uniswap",
    network: "Ethereum",
    progress: 0,
    total: 3,
    unit: "positions",
    status: "not-started",
    description: "Provide liquidity to selected Uniswap V3 pools",
  },
  {
    id: "t5",
    title: "Bridge to Linea",
    protocol: "LayerBank",
    network: "Linea",
    progress: 3,
    total: 3,
    unit: "bridges",
    status: "completed",
    description: "Bridge ETH to Linea network using official bridge",
  },
  {
    id: "t6",
    title: "Uniswap Weekly Swaps",
    protocol: "Uniswap",
    network: "Ethereum",
    progress: 1,
    total: 7,
    unit: "swaps",
    status: "in-progress",
    description: "Execute swaps weekly on Ethereum mainnet for activity score",
  },
  {
    id: "t7",
    title: "SyncSwap Liquidity",
    protocol: "SyncSwap",
    network: "Linea",
    progress: 0,
    total: 2,
    unit: "positions",
    status: "not-started",
    description: "Add liquidity to SyncSwap pools on Linea",
  },
];

// ─── Summary Stats ──────────────────────────────────────────────────────────

export const summaryStats = {
  totalWallets: wallets.length,
  totalTransactions: wallets.reduce((acc, w) => acc + w.txCount, 0),
  farmingScore: Math.round(
    wallets.reduce((acc, w) => acc + w.farmingScore, 0) / wallets.length
  ),
  activeTasks: tasks.filter((t) => t.status === "in-progress").length,
};
