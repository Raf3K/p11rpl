import type { Access, CollectionConfig } from 'payload'

const ownsOrderOrIsStaff: Access = ({ req }) => {
  if (req.user?.collection !== 'users') return false
  if (req.user.role === 'standard-admin' || req.user.role === 'super-admin') return true
  return { user: { equals: req.user.id } }
}

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    group: 'Commerce',
    useAsTitle: 'orderNumber',
  },
  access: {
    create: ({ req }) => req.user?.collection === 'users',
    delete: ({ req }) =>
      req.user?.collection === 'users' &&
      (req.user.role === 'standard-admin' || req.user.role === 'super-admin'),
    read: ownsOrderOrIsStaff,
    update: ownsOrderOrIsStaff,
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      index: true,
    },
    {
      name: 'totalAmount',
      type: 'number',
      min: 0,
      required: true,
    },
    {
      name: 'fulfillmentType',
      type: 'select',
      options: ['delivery', 'pickup'],
      required: true,
    },
    {
      name: 'paymentMethod',
      type: 'select',
      options: ['qris', 'gopay', 'bca', 'bri', 'alfamart', 'indomaret'],
      required: true,
    },
    {
      name: 'voucher',
      type: 'relationship',
      relationTo: 'vouchers',
    },
    {
      name: 'paymentExpiresAt',
      type: 'date',
      required: true,
    },
    {
      name: 'paymentStatus',
      type: 'select',
      defaultValue: 'waiting',
      options: [
        { label: 'Waiting for Payment', value: 'waiting' },
        { label: 'Paid', value: 'paid' },
        { label: 'Expired', value: 'expired' },
        { label: 'Failed', value: 'failed' },
      ],
      required: true,
    },
    {
      name: 'virtualAccountNumber',
      type: 'text',
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'quantity', type: 'number', min: 1, required: true },
        { name: 'price', type: 'number', min: 0, required: true },
      ],
    },
  ],
  timestamps: true,
  versions: false,
}
