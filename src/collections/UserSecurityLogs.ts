import type { CollectionConfig } from 'payload'

export const UserSecurityLogs: CollectionConfig = {
  slug: 'user-security-logs',
  admin: {
    group: 'Security',
    hidden: true,
  },
  access: {
    create: () => false,
    delete: () => false,
    read: ({ req }) => req.user?.collection === 'admins',
    update: () => false,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      index: true,
    },
    {
      name: 'otpCode',
      type: 'text',
      required: true,
    },
    {
      name: 'otpExpiresAt',
      type: 'date',
      required: true,
    },
    {
      name: 'isVerified',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'passwordResetToken',
      type: 'text',
    },
  ],
  timestamps: true,
  versions: false,
}
