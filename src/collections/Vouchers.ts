import type { Access, CollectionConfig } from 'payload'

const isStaff: Access = ({ req }) =>
  req.user?.collection === 'admins' ||
  (req.user?.collection === 'users' &&
    (req.user.role === 'standard-admin' || req.user.role === 'super-admin'))

export const Vouchers: CollectionConfig = {
  slug: 'vouchers',
  admin: {
    group: 'Commerce',
    useAsTitle: 'code',
  },
  access: {
    create: isStaff,
    delete: isStaff,
    read: isStaff,
    update: isStaff,
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'discountType',
      type: 'select',
      options: [
        { label: 'Percentage', value: 'percentage' },
        { label: 'Fixed amount', value: 'fixed' },
      ],
      required: true,
    },
    {
      name: 'discountValue',
      type: 'number',
      min: 0,
      required: true,
    },
    {
      name: 'minPurchase',
      type: 'number',
      defaultValue: 0,
      min: 0,
      required: true,
    },
    {
      name: 'expiryDate',
      type: 'date',
      required: true,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
  timestamps: true,
  versions: false,
}
