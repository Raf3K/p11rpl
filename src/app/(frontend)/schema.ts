// Front-end models mirroring the PostgreSQL schema (snake_case columns kept 1:1).
export type UUID = string;
export type ISODate = string; // DATE -> "YYYY-MM-DD"
export type ISOTime = string; // TIME -> "HH:MM"
export type ISOTimestamp = string; // TIMESTAMPTZ

export type UserRole = "guest" | "customer" | "standard_admin" | "super_admin";

export interface User { user_id: UUID; full_name: string; email: string; password_hash: string; phone_number: string | null; role: UserRole; created_at: ISOTimestamp }
export interface CustomerAddress { address_id: UUID; user_id: UUID; street_address: string; city: string; postal_code: string; is_default: boolean }
export interface CustomerPaymentMethod { payment_method_id: UUID; user_id: UUID; provider: string; card_last_four: string; expiry_date: ISODate }

export type StockStatus = "In Stock" | "Low Stock" | "Out of Stock";
export interface Product { product_id: UUID; title: string; category: string; base_price: number; discount_percentage: number; stock_quantity: number; readonly stock_status: StockStatus; image_url: string | null; technical_specs: Record<string, unknown> | null; created_at: ISOTimestamp }

export type FulfillmentType = "Delivery" | "In-Store Pickup";
export type PaymentMethod = "qris" | "gopay" | "bca" | "bri" | "alfamart" | "indomaret";
export type PaymentStatus = "Waiting for Payment" | "Paid" | "Expired" | "Failed";
export interface Order { order_id: UUID; user_id: UUID | null; total_amount: number; fulfillment_type: FulfillmentType; pickup_code: string | null; order_status: string; payment_method: PaymentMethod | null; voucher_id: UUID | null; payment_expires_at: ISOTimestamp | null; payment_status: PaymentStatus; created_at: ISOTimestamp }

export type DiscountType = "percentage" | "fixed";
export interface Voucher { voucher_id: UUID; code: string; discount_type: DiscountType; discount_value: number; min_purchase: number; expiry_date: ISODate; is_active: boolean; created_at: ISOTimestamp }

export interface UserSecurityLog { log_id: UUID; user_id: UUID; otp_code: string; otp_expires_at: ISOTimestamp | null; is_verified: boolean; password_reset_token: string | null; updated_at: ISOTimestamp }

export type SessionType = "Online Video Call" | "In-Store Session";
export interface ConsultationBooking { booking_id: UUID; user_id: UUID; session_type: SessionType; booking_date: ISODate; booking_time: ISOTime; status: string }

export interface WarrantyClaim { claim_id: UUID; user_id: UUID; product_id: UUID; serial_number: string; issue_description: string; claim_status: string; created_at: ISOTimestamp }

export interface ForumThread { thread_id: UUID; author_id: UUID; category: string; title: string; content: string; upvotes: number; created_at: ISOTimestamp }

/** Mirrors the GENERATED ALWAYS AS stock_status column. */
export function stockStatusFor(quantity: number): StockStatus {
  if (quantity === 0) return "Out of Stock";
  if (quantity < 5) return "Low Stock";
  return "In Stock";
}

/** Maps the session-stored role string to the user_role enum. */
export function toUserRole(value: string | null): UserRole {
  if (value === "super" || value === "super_admin") return "super_admin";
  if (value === "admin" || value === "standard_admin") return "standard_admin";
  if (value === "customer") return "customer";
  return "guest";
}

export const newId = (): UUID => (typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`);
