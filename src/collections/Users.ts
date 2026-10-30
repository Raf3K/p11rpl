import type { Access, CollectionConfig } from 'payload'

const isSelfOrStaff: Access = ({ req }) => {
  if (req.user?.collection === 'admins') return true
  if (req.user?.collection !== 'users') return false
  if (req.user.role === 'standard-admin' || req.user.role === 'super-admin') return true
  return { id: { equals: req.user.id } }
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    group: 'Commerce',
    useAsTitle: 'email',
  },
  auth: {
    maxLoginAttempts: 8,
    lockTime: 15 * 60 * 1000,
  },
  access: {
    admin: ({ req }) => req.user?.collection === 'admins',
    create: ({ req }) => req.user?.collection === 'admins',
    delete: isSelfOrStaff,
    read: isSelfOrStaff,
    update: isSelfOrStaff,
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'customer',
      options: [
        { label: 'Customer', value: 'customer' },
        { label: 'Standard Admin', value: 'standard-admin' },
        { label: 'Super Admin', value: 'super-admin' },
      ],
      required: true,
    },
  ],
  versions: false,
}
