export const pagesPath = {
  "home": {
    $url: (url?: { hash?: string }) => ({ pathname: '/home' as const, hash: url?.hash })
  },
  "pokemon": {
    _pokemon_name: (pokemon_name: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/pokemon/[pokemon_name]' as const, query: { pokemon_name }, hash: url?.hash })
    })
  }
}

export type PagesPath = typeof pagesPath
