declare module 'meteor/accounts-base' {
  namespace Accounts {
    interface impSvc {
      /**
       * Set the impersonation token for the current user
       * @param userId - The ID of the user to impersonate
       * @returns The impersonation token
       */
      set: (userId: string) => Promise<string>
    }
  }
}

export {}
