const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 4000;

// Configuración de Supabase
const supabaseUrl = 'https://ggtofmrfavzkfzserhfn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndG9mbXJmYXZ6a2Z6c2VyaGZuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTk5Mzk2NiwiZXhwIjoyMDI1NTY5OTY2fQ.yZQ7guG1jLmbE-7tChid2Fzl8ilobYSi_wcVbVY1sxA';
const supabase = createClient(supabaseUrl, supabaseKey);

// Endpoint para obtener datos de la tabla "pedidos"
app.get('/pedidos', async (req, res) => {
  const { data, error } = await supabase
    .from('pedidos')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});
