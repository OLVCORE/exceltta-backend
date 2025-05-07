// Middleware checkPlano.js

module.exports = function checkPlano(req, res, next) {
  const plano = req.usuario?.plano || "Free";

  // Simular limite de cota para plano Free
  if (plano === "Free") {
    return res.status(403).json({
      erro: "Limite do plano Free atingido. Faça upgrade para acessar este recurso.",
      marcaDagua: true,
      bloqueiaIA: true,
      popup: true
    });
  }

  // Planos pagos liberam acesso completo
  next();
};
