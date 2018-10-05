const walletsStore = [
  {
    id: "PERSONAL",
    name: "Personal",
    activity: [
      {
        description: "Salary",
        amount: 100,
        recipientDescription: "Antonio Groza",
        recipientid: "AAAAAAAA1234567890",
        timestamp: "2018-10-05T08:24:48.034+02:00"
      },
      {
        description: "Mac",
        amount: -15.456,
        recipientDescription: "Steve Jobs",
        recipientid: "BBBBBBBB1234567890",
        timestamp: "2018-10-07T08:24:48.034+02:00"
      },
      {
        description: "Tesla",
        amount: -32.723,
        recipientDescription: "Antonio Groza",
        recipientid: "AAAAAAAA1234567890",
        timestamp: "2018-12-01T08:24:48.034+02:00"
      }
    ]
  },
  {
    id: "WORK",
    name: "Work",
    activity: [
      {
        description: "Salary",
        amount: 100,
        recipientDescription: "Antonio Groza",
        recipientid: "AAAAAAAA1234567890",
        timestamp: "2018-10-05T08:24:48.034+02:00"
      },
      {
        description: "Mac",
        amount: -15.456,
        recipientDescription: "Steve Jobs",
        recipientid: "BBBBBBBB1234567890",
        timestamp: "2018-10-07T08:24:48.034+02:00"
      },
      {
        description: "Tesla",
        amount: -32.723,
        recipientDescription: "Antonio Groza",
        recipientid: "AAAAAAAA1234567890",
        timestamp: "2018-12-01T08:24:48.034+02:00"
      }
    ]
  },
  {
    id: "INVESTMENTS",
    name: "Investments",
    activity: [
      {
        description: "Salary",
        amount: 100,
        recipientDescription: "Antonio Groza",
        recipientid: "AAAAAAAA1234567890",
        timestamp: "2018-10-05T08:24:48.034+02:00"
      },
      {
        description: "Mac",
        amount: -15.456,
        recipientDescription: "Steve Jobs",
        recipientid: "BBBBBBBB1234567890",
        timestamp: "2018-10-07T08:24:48.034+02:00"
      },
      {
        description: "Tesla",
        amount: -32.723,
        recipientDescription: "Antonio Groza",
        recipientid: "AAAAAAAA1234567890",
        timestamp: "2018-12-01T08:24:48.034+02:00"
      }
    ]
  },
  {
    id: "BACKUP",
    name: "Backup",
    activity: [
      {
        description: "Salary",
        amount: 4362.662,
        recipientDescription: "Antonio Groza",
        recipientid: "AAAAAAAA1234567890",
        timestamp: "2018-10-05T08:24:48.034+02:00"
      },
      {
        description: "Mac",
        amount: -15.456,
        recipientDescription: "Steve Jobs",
        recipientid: "BBBBBBBB1234567890",
        timestamp: "2018-10-07T08:24:48.034+02:00"
      },
      {
        description: "Tesla",
        amount: -32.723,
        recipientDescription: "Antonio Groza",
        recipientid: "AAAAAAAA1234567890",
        timestamp: "2018-12-01T08:24:48.034+02:00"
      }
    ]
  }
];

function calculateStats(wallet) {
  return {
    balance: wallet.activity.reduce(
      (sum, activity) => sum + activity.amount,
      0
    ),
    revenues: wallet.activity.reduce(
      (sum, activity) => (activity.amount > 0 ? sum + activity.amount : sum),
      0
    ),
    expenses: wallet.activity.reduce(
      (sum, activity) => (activity.amount < 0 ? sum + activity.amount : sum),
      0
    )
  };
}

export function getTotalBalance() {
  return getWallets().reduce((sum, wallet) => sum + wallet.balance, 0);
}

export function getWallets() {
  return walletsStore.map(wallet => ({
    id: wallet.id,
    name: wallet.name,
    ...calculateStats(wallet)
  }));
}

export function getWallet(walletId) {
  const wallet = walletsStore.find(wallet => walletId === wallet.id);

  if (!wallet) {
    return null;
  } else {
    return {
      ...wallet,
      ...calculateStats(wallet)
    };
  }
}
