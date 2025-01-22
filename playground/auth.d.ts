declare module '#oidc-auth' {
  interface ProviderInfo {
    providerName: string
  }
  interface UserSession {
    // provider: ProviderKeysWithDev
    canRefresh: boolean
    expireAt: number
    singleSignOut?: boolean
    loggedInAt?: number
    updatedAt?: number
    // userInfo?: Record<string, unknown> 
    userInfo?: {
      role: "admin" | "editor" | "contributor"
      organization_id: number
      organization_slug: string
    }
    userName?: string
    claims?: Record<string, unknown>
    accessToken?: string
    idToken?: string
  }
}

export {}
