# 🔧 Database Troubleshooting Guide

This guide helps you resolve database constraint errors when submitting tickets.

## 🚨 Common Error: Check Constraint Violation

### Error Message Example:
```
Supabase Check Constraint Error for 'category' field
```

This means the value you're sending doesn't match the allowed values in your database.

## 🔍 How to Check Your Database Constraints

### Option 1: Supabase Dashboard
1. **Go to your Supabase project dashboard**
2. **Navigate to** Table Editor → `tickets` table
3. **Click on the `category` column**
4. **Check the constraints** in the column details

### Option 2: SQL Query
Run this query in your Supabase SQL editor:
```sql
SELECT 
    conname as constraint_name,
    pg_get_constraintdef(c.oid) as constraint_definition
FROM pg_constraint c
JOIN pg_namespace n ON n.oid = c.connamespace
JOIN pg_class cl ON cl.oid = c.conrelid
WHERE cl.relname = 'tickets' 
AND c.contype = 'c';
```

## 🛠️ Common Fixes

### Fix 1: Update Form Values to Match Database

If your database allows specific values, update the form:

**Example: Database allows `['Hardware', 'Software', 'Networking']`**

```javascript
// In TicketForm.jsx, update the category values:
value="Hardware"    // ✅ Allowed
value="Software"    // ✅ Allowed  
value="Networking"  // ✅ Allowed (not "Network")
```

### Fix 2: Update Database Constraints

If you want to allow different values, update your database:

```sql
-- Remove old constraint
ALTER TABLE tickets DROP CONSTRAINT IF EXISTS tickets_category_check;

-- Add new constraint with your desired values
ALTER TABLE tickets ADD CONSTRAINT tickets_category_check 
CHECK (category IN ('Hardware', 'Software', 'Network', 'Other'));
```

### Fix 3: Add Missing Values to Database

```sql
-- Add "Network" to existing constraint
ALTER TABLE tickets DROP CONSTRAINT tickets_category_check;
ALTER TABLE tickets ADD CONSTRAINT tickets_category_check 
CHECK (category IN ('Hardware', 'Software', 'Network'));
```

## 🎯 Current Form Values

The form currently sends these values:

### Categories:
- `Hardware` 
- `Software`
- `Networking` (updated from "Network")

### Priorities:
- `Very Urgent`
- `Urgent` 
- `Low`

## 🔧 Quick Fixes for Common Issues

### Issue: "Network" not allowed
**Solution:** Changed to "Networking" in the form

### Issue: Priority values not matching
**Check your database allows:**
- `Very Urgent`
- `Urgent`
- `Low`

**If not, update the database constraint:**
```sql
ALTER TABLE tickets DROP CONSTRAINT IF EXISTS tickets_priority_check;
ALTER TABLE tickets ADD CONSTRAINT tickets_priority_check 
CHECK (priority IN ('Very Urgent', 'Urgent', 'Low'));
```

### Issue: Other field constraints
**Common fields that might have constraints:**
- `status` - usually `['open', 'in_progress', 'closed']`
- `category` - as discussed above
- `priority` - as discussed above

## 📋 Recommended Database Schema

Here's a recommended schema for your tickets table:

```sql
CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    title VARCHAR(500) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('Hardware', 'Software', 'Networking')),
    priority VARCHAR(20) NOT NULL CHECK (priority IN ('Very Urgent', 'Urgent', 'Low')),
    floor VARCHAR(50) NOT NULL,
    office VARCHAR(100) NOT NULL,
    status VARCHAR(20) DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'closed')),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

## 🧪 Testing Your Form

### Test Data
Use this test data to verify your form works:

```json
{
  "email": "test@company.com",
  "title": "Test ticket",
  "description": "This is a test ticket",
  "category": "Hardware",
  "priority": "Low",
  "floor": "3rd Floor",
  "office": "Room 301"
}
```

### Manual Testing Steps
1. **Fill out the form** with test data
2. **Submit the ticket**
3. **Check for errors** in browser console
4. **Verify data** appears in your Supabase table

## 🔍 Debugging Steps

### 1. Check Browser Console
- Open Developer Tools (F12)
- Look for error messages in Console tab
- Check Network tab for failed requests

### 2. Check Supabase Logs
- Go to Supabase Dashboard → Logs
- Look for recent errors
- Check the exact error message

### 3. Test API Endpoint
Use curl or Postman to test your webhook:

```bash
curl -X POST https://your-webhook-url.com \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@company.com",
    "title": "Test ticket",
    "description": "Test description",
    "category": "Hardware",
    "priority": "Low",
    "floor": "3rd Floor",
    "office": "Room 301"
  }'
```

## 📞 Still Having Issues?

If you're still experiencing problems:

1. **Check the exact error message** in your webhook/database logs
2. **Verify your database schema** matches the form values
3. **Test with minimal data** to isolate the issue
4. **Check Supabase documentation** for constraint syntax

## 🎯 Prevention Tips

- **Always validate** form data matches database constraints
- **Use consistent naming** between form and database
- **Test thoroughly** after any schema changes
- **Document your constraints** for future reference

---

**Remember:** Database constraints are there to ensure data integrity. Make sure your form values exactly match what your database expects!