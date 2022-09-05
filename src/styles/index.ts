// Styles
const styles = {
  button: {
    common: 'p-2 rounded-md border shadow hover:transition-colors md:hover:shadow-sm',
    filled: 'bg-slate-700 border-white/5 text-white md:hover:bg-slate-600',
    outlined:
      'border-slate-300 dark:border-white/5 md:hover:bg-slate-50 dark:md:hover:bg-slate-700',
  },
  tabBtn: {
    common:
      'flex items-center gap-2 -mb-px p-3 rounded-t-lg border-0 border-b-2 border-transparent text-2xl font-bold hover:transition-colors',
    active: 'border-slate-700 text-slate-700 dark:border-white dark:text-white',
    inactive: 'text-gray-500 md:hover:border-gray-400 md:hover:text-gray-400',
  },
  card: 'bg-white border border-transparent rounded-xl shadow-md dark:bg-slate-800 dark:border-white/5',
  cardLabel: {
    normal: 'text-xl font-semibold text-gray-400 uppercase',
    sm: 'text-xs font-semibold text-gray-400 uppercase',
  },
}

export { styles }
