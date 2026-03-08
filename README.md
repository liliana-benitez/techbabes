# Tech Babes

This is an ecommerce site I designed for my personal shop. 
Prior to this, my products were only available through Etsy. 
I wanted a more personalized site to really showcase what the brand and vision is all about. 

🔗 Live Site: [techbabes.dev](https://www.techbabes.dev/)

<img width="1468" height="811" alt="Screenshot 2026-03-08 at 3 14 52 PM" src="https://github.com/user-attachments/assets/edf325a6-c5fe-4e60-a541-5924e871e86d" />
<img width="1463" height="825" alt="Screenshot 2026-03-08 at 3 14 33 PM" src="https://github.com/user-attachments/assets/4102ea5f-137a-4823-84da-d118cd542fd3" />

### Current Features (MVP)
- Browse products synced from Printful via API
- Add to cart and manage quantities
- Checkout with Stripe
- Order confirmation + contact form via Resend + React Email
- Address validation using Country-State-City library
- Form validation with Zod

### Upcoming Features
- An educational/lifestyle blog 
- Dark/light mode toggle
- Terminal style product detail page
- Easter egg discount 
- Mini games


### Tech Stack Diagram
A high-level overview of the app's architecture, showing how the Next.js frontend 
and API routes interact with third-party services like Stripe, Printful, and Resend.
<img width="740" height="633" alt="Screenshot 2026-03-08 at 4 42 50 PM" src="https://github.com/user-attachments/assets/17f3343d-58e7-4922-b435-da15dc362934" />

### Order Flow
This sequence diagram walks through the full checkout-to-fulfillment lifecycle.
From the user submitting shipping info, to the order being created in Printful, 
and confirmation emails sent with Resend.
```mermaid
sequenceDiagram
    autonumber
    actor U as User
    participant F as Next.js Frontend
    participant A as Next.js API
    participant S as Stripe (External)
    participant P as Printful API
    participant R as Resend (Email)

    %% Checkout Phase
    U->>F: Enter Shipping Info & Submit
    F->>A: POST /api/shipping-rates
    A->>P: Request Shipping Estimates
    P-->>A: Return Rate Options
    A-->>F: Return Chosen Shipping Rate
    
    F->>A: POST /api/payment-intent
    A->>S: Create Payment Intent (w/ Metadata)
    S-->>A: Return Client Secret
    A-->>F: Return Client Secret
    
    %% Payment Phase
    F->>S: Submit Payment (Stripe Elements)
    S-->>U: Confirm Payment Success
    
    %% Fulfillment Phase (Asynchronous)
    Note over S, A: Asynchronous Hook
    S->>A: Webhook: payment_intent.succeeded
    A->>A: Internal: Verify Signature
    A->>S: Retrieve Full PI Details
    S-->>A: Return PI (Metadata: Items, Shipping)
    
    A->>P: createPrintfulOrder (POST /orders)
    P-->>A: Return Printful Order ID
    
    %% Notification Phase
    A->>A: Trigger /api/send
    A->>R: Send Cust Email & Owner Alert
    R-->>A: Success
    A-->>S: 200 OK (Acknowledge Event)

```
